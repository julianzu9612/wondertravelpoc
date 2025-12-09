import { getCookie } from 'cookies-next';
import { languageServer } from './languageServer';
import { CLanguage } from '../constants';
const useGetLanguage = (): string => {
  let lng = '';
  if (typeof window === 'undefined') {
    lng = languageServer() ?? '';    
  } else {    
    lng = getCookie('i18next') ?? '';    
  }
  return lng || CLanguage.lang + '';
};

export default useGetLanguage;
