import { date } from '../../src/utils/date';

describe('utils/date >> now', () => {
  test('should return the current date and time', () => {
    const currentDate = new Date();
    const now = date.now();
    expect(Number(now.date.year)).toEqual(currentDate.getFullYear());
    expect(Number(now.date.monthNum)).toEqual(currentDate.getMonth());
    expect(Number(now.date.day)).toEqual(currentDate.getDate());
    expect(now.time.full).toBeTruthy();
  });
});

describe('utils/date >> mount', () => {
  test('should return a specific date', () => {
    const mounted = date.mount('2022-01-10');
    expect(mounted.date.year).toEqual('2022');
    expect(mounted.date.month).toEqual('01');
    expect(mounted.date.day).toEqual('10');
  });
});

describe('utils/date >> split', () => {
  test('should split an ISO formatted date', () => {
    const splitted = date.split('2022-01-10');
    expect(splitted.year).toEqual('2022');
    expect(splitted.month).toEqual('01');
    expect(splitted.day).toEqual('10');
  });

  test('should split a BR formatted date', () => {
    const splitted = date.split('10/01/2022');
    expect(splitted.year).toEqual('2022');
    expect(splitted.month).toEqual('01');
    expect(splitted.day).toEqual('10');
  });

  test('should not split an invalid date', () => {
    const splitted = date.split('2022 10 11 abc');
    expect(splitted.year).toEqual(undefined);
    expect(splitted.month).toEqual(undefined);
    expect(splitted.day).toEqual(undefined);
  });
});

describe('utils/date >> diff', () => {
  test('should return the difference between two dates', () => {
    const past = date.mount('2022-01-10');
    const future = date.mount('2022-01-15');
    const diff = date.diff(past.date.full, future.date.full);
    expect(diff.year).toEqual('0');
    expect(diff.month).toEqual('0');
    expect(diff.day).toEqual('5');
  });
});

describe('utils/date >> add', () => {
  test('add 2 days to a date', () => {
    const original = date.mount('2022-01-10');
    const added = date.add(original, { day: '2' });
    expect(added.date.year).toEqual('2022');
    expect(added.date.month).toEqual('01');
    expect(added.date.day).toEqual('12');
  });

  test('add 1 month and 15 days to a date', () => {
    const original = date.mount('2022-01-10');
    const added = date.add(original, { day: '15', month: '1' });
    expect(added.date.year).toEqual('2022');
    expect(added.date.month).toEqual('02');
    expect(added.date.day).toEqual('25');
  });

  test('add 1 year 3 months and 35 days to a date', () => {
    const original = date.mount('2022-01-10');
    const added = date.add(original, { day: '35', month: '3', year: '1' });
    expect(added.date.year).toEqual('2023');
    expect(added.date.month).toEqual('05');
    expect(added.date.day).toEqual('15');
  });

  test('add 1 year only', () => {
    const original = date.mount('2022-01-10');
    const added = date.add(original, { year: '1' });
    expect(added.date.year).toEqual('2023');
  });
});

describe('utils/date >> sub', () => {
  test('subtract 2 days to a date', () => {
    const original = date.mount('2022-01-10');
    const subtracted = date.sub(original, { day: '2' });
    expect(subtracted.date.year).toEqual('2022');
    expect(subtracted.date.month).toEqual('01');
    expect(subtracted.date.day).toEqual('08');
  });

  test('subtract 1 month and 15 days to a date', () => {
    const original = date.mount('2022-01-10');
    const subtracted = date.sub(original, { day: '15', month: '1' });
    expect(subtracted.date.year).toEqual('2021');
    expect(subtracted.date.month).toEqual('11');
    expect(subtracted.date.day).toEqual('25');
  });

  test('subtract 1 year 3 months and 35 days to a date', () => {
    const original = date.mount('2022-01-10');
    const subtracted = date.sub(original, { day: '35', month: '3', year: '1' });
    expect(subtracted.date.year).toEqual('2020');
    expect(subtracted.date.month).toEqual('09');
    expect(subtracted.date.day).toEqual('05');
  });

  test('subtract 1 year only', () => {
    const original = date.mount('2022-01-10');
    const subtracted = date.sub(original, { year: '1' });
    expect(subtracted.date.year).toEqual('2021');
  });
});

describe('utils/date >> toFormat', () => {
  test('get the short week day of a date in portuguese', () => {
    const original = date.mount('2022-01-10');
    const formatted = date.toFormat(original.date.full, 'EE');
    expect(formatted).toEqual('segunda');
  });

  test('throw an error for an invalid formatting option', () => {
    const original = date.mount('2022-01-10');
    const formatted = date.toFormat(original.date.full, 'abcdefg');
    expect(formatted).toEqual('');
  });
});

describe('utils/date >> toBRFormat', () => {
  test('get the formatted date as dd/MM/yyyy', () => {
    const original = date.mount('2022-01-10');
    const formatted = date.toBRFormat(original.date.full);
    expect(formatted).toEqual('10/01/2022');
  });
});
