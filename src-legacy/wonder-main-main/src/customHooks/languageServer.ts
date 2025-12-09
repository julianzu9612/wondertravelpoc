'use server';
//import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { CLanguage } from '../constants';
export const languageServer = () => {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has('i18next');
  if(hasCookie){
    const i18next = cookieStore.get('i18next');
    return i18next?.value;
  }
  return CLanguage.lang;
  
};
