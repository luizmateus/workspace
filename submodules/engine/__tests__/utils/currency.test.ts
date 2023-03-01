import { currency } from '../../src/utils/currency';

describe('utils/currency >> toCurrency', () => {
  test('should convert number to format', () => {
    const number = 5;
    const formatted = currency.toCurrency(number);
    expect(formatted).toEqual('R$ 5,00');
  });

  test('should convert number to format with decimals', () => {
    const number = 1.23;
    const formatted = currency.toCurrency(number);
    expect(formatted).toEqual('R$ 1,23');
  });

  test('should convert number to format resolving to two decimals', () => {
    const number = 1.239123;
    const formatted = currency.toCurrency(number);
    expect(formatted).toEqual('R$ 1,24');
  });

  test('should convert number to format with negative sign', () => {
    const number = -4.56;
    const formatted = currency.toCurrency(number);
    expect(formatted).toEqual('-R$ 4,56');
  });

  test('should throw error and return default format', () => {
    const number = 'abc';
    const formatted = currency.toCurrency(Number(number));
    expect(formatted).toEqual('R$ 0,00');
  });
});

describe('utils/currency >> toNumber', () => {
  test('should convert format to number', () => {
    const formatted = 'R$ 5,00';
    const number = currency.toNumber(formatted);
    expect(number).toEqual(5);
  });

  test('should convert format to number with decimals', () => {
    const formatted = 'R$ 1,23';
    const number = currency.toNumber(formatted);
    expect(number).toEqual(1.23);
  });

  test('should convert format to number resolving to two decimals', () => {
    const formatted = 'R$ 1,239123';
    const number = currency.toNumber(formatted);
    expect(number).toEqual(1.24);
  });

  test('should convert format to number with negative sign', () => {
    const formatted = '-R$ 4,56';
    const number = currency.toNumber(formatted);
    expect(number).toEqual(-4.56);
  });

  test('should convert format to number with invalid decimal', () => {
    const formatted = 'R$ 7.89';
    const number = currency.toNumber(formatted);
    expect(number).toEqual(789);
  });

  test('should convert format to number with invalid separator', () => {
    const formatted = 'R$ 1,500.00';
    const number = currency.toNumber(formatted);
    expect(number).toEqual(1.5);
  });

  test('should convert format to number with zero value', () => {
    const formatted = 'abc';
    const number = currency.toNumber(formatted);
    expect(number).toEqual(0);
  });
});
