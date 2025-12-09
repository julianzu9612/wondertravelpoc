function sanitizeNumber(number: number | string): string {
  const numString = number.toString();
  return numString.replace(/[.,]/g, '');
}

export function formatCurrencyI18n(number: string): string {
  number = sanitizeNumber(number);
  const numberClean: number = parseInt(number);
  
  const maxPriceTripInUSD = 20_000;

  if (!isFinite(numberClean)) {
    throw new Error('El valor proporcionado no es un número válido');
  }

  let currency: string;
  if (numberClean <= maxPriceTripInUSD) {
    currency = 'USD';
  } else {
    currency = 'COP';
  }

  return currency;
}
