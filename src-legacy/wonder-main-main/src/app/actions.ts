'use server';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { DEFAULT_CURRENCY } from '../middleware';

export async function createCurrencyCookie(currency: string) {
  setCookie('currency', currency);
}

export const updateQueryParams = async <T>({
  params,
  searchParams,
}: {
  params?: Partial<T>;
  searchParams: ReadonlyURLSearchParams;
}) => {
  const search = new URLSearchParams();
  searchParams.forEach((entries) => {
    const [key, value] = entries as unknown as [string, string | string[]];
    if (!!!value || value.length === 0) {
      search.delete(key);
    } else {
      search.set(key, String(value));
    }
  });
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      const valueType = value as string | string[];
      if (
        !!!valueType ||
        (valueType.length === 0 && search.get(key) !== undefined)
      ) {
        search.delete(key);
      } else {
        search.set(key, String(valueType));
      }
    });
  }
  const query = search ? `?${search.toString()}` : '';
  return query;
};

export async function getCurrencyCookie() {
  const currency = getCookie('currency', { cookies }) || DEFAULT_CURRENCY;
  return currency;
}

export const setAcceptCookie = async (value: string) => {
  setCookie('acceptCookies', value, {
    maxAge: 7 * 24 * 60 * 60,
    cookies,
  });
};
export const hasAcceptCookie = async () => {
  return hasCookie('acceptCookies', { cookies });
};
