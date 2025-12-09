import { getCookie } from 'cookies-next';

export function getCurrencyCookieClient() {
  const currency = getCookie('currency') || 'USD';
  return currency;
}
