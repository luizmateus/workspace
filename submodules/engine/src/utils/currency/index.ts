import currencyjs from 'currency.js';

const options: currencyjs.Options = {
  decimal: ',',
  pattern: '! #',
  negativePattern: '-! #',
  separator: '.',
  symbol: 'R$',
  errorOnInvalid: true,
};

const exec = (value: currencyjs.Any) => currencyjs(value, options);

/** Converter número para moeda com formatação. */
const toCurrency = (value: number): string => {
  const zeroValue = exec(0).format();

  try {
    if (!value) {
      throw 'NaN or invalid';
    }
    return exec(value).format();
  } catch {
    return zeroValue;
  }
};

/** Converter moeda com formatação para número. */
const toNumber = (value: string): number => {
  return exec(value).value;
};

export const currency = {
  toCurrency,
  toNumber,
};
