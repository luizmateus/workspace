import { ptBR } from 'date-fns/locale';
import { add as dfAdd, differenceInDays, differenceInMonths, differenceInYears, format, setDefaultOptions, sub as dfSub } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import type { IDate, IDateParts } from '../../types';

setDefaultOptions({ locale: ptBR });

const DATE_REGEX = {
  BR: /[0-3]\d\/[01]\d\/\d{4}/i,
  ISO: /\d{4}-[01]\d-[0-3]\d/i,
};

/** Obter a data atual, com a timezone brasileira. */
const now = (specificYear?: string, specificMonth?: string, specificDay?: string): IDate => {
  let newDate = new Date();
  if (specificYear && specificMonth && specificDay) {
    newDate = new Date(Number(specificYear), Number(specificMonth) - 1, Number(specificDay));
  }

  const currentDate = utcToZonedTime(newDate, 'America/Sao_Paulo');

  const date = format(currentDate, 'yyyy-MM-dd');
  const time = format(currentDate, 'HH:mm:ss');

  const [year, month, day] = date.split('-');
  const [hour, minutes, seconds] = time.split(':');

  return {
    date: {
      obj: currentDate,
      full: date,
      year,
      month,
      monthNum: Number(month) - 1,
      day,
    },
    time: {
      full: time,
      hour,
      minutes,
      seconds,
    },
  };
};

/** Montar um objeto de data no mesmo formato da rotina `now`. */
const mount = (date: string | Date): IDate => {
  const { year, month, day } = split(date);
  return now(year, month, day);
};

/** Separar uma data string em anos, meses e dias. */
const split = (date: string | Date): IDateParts => {
  if (date instanceof Date) {
    const splitted = date.toISOString().split('T');
    return split(String(splitted[0]));
  }

  const dateValue = date.substring(0, 10);

  if (DATE_REGEX.BR.test(dateValue)) {
    const [day, month, year] = date.split('/');
    return { year, month, day };
  }

  if (DATE_REGEX.ISO.test(dateValue)) {
    const [year, month, day] = date.split('-');
    return { year, month, day };
  }

  return {};
};

/** Comparar duas datas. */
const diff = (dateInit: string, dateEnd: string): IDateParts => {
  const dateInitMounted = mount(dateInit);
  const dateEndMounted = mount(dateEnd);

  const year = differenceInYears(dateEndMounted.date.obj, dateInitMounted.date.obj);
  const month = differenceInMonths(dateEndMounted.date.obj, dateInitMounted.date.obj);
  const day = differenceInDays(dateEndMounted.date.obj, dateInitMounted.date.obj);

  return { year: String(year), month: String(month), day: String(day) };
};

/** Adicionar anos/meses/dias em uma data. */
const add = (date: IDate, toAdd: IDateParts): IDate => {
  const dateAdded = dfAdd(date.date.obj, {
    years: Number(toAdd.year || 0),
    months: Number(toAdd.month || 0),
    days: Number(toAdd.day || 0),
  });

  const dateAddedMounted = mount(dateAdded);
  return dateAddedMounted;
};

/** Subtrair anos/meses/dias de uma data. */
const sub = (date: IDate, toSub: IDateParts): IDate => {
  const dateSubtracted = dfSub(date.date.obj, {
    years: Number(toSub.year || 0),
    months: Number(toSub.month || 0),
    days: Number(toSub.day || 0),
  });

  const dateSubtractedMounted = mount(dateSubtracted);
  return dateSubtractedMounted;
};

/** Formatar data livremente. */
const toFormat = (date: string, dateFormat: string): string => {
  try {
    const dateMount = mount(date);
    const formattedDate = format(dateMount.date.obj, dateFormat);
    return formattedDate;
  } catch {
    return '';
  }
};

/** Formatar data para o formato brasileiro padrão. */
const toBRFormat = (date: string): string => {
  const dateMount = mount(date);
  return toFormat(dateMount.date.full, 'dd/MM/yyyy');
};

export const date = {
  now,
  mount,
  split,
  diff,
  add,
  sub,
  toFormat,
  toBRFormat,
};
