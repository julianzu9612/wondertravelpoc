import i18next from 'i18next';

export const getCurrentLang = () => {  
  let lang = 'en';
  if (typeof window !== 'undefined') {
    const path = window?.location?.pathname?.split('/');
    lang = path && path[1] ? path[1]: 'en';
  }
  return lang;
};

export const changeLanguage = (lng:string) => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const pathSplit = pathname.split('/');
    const pathSplitLang = pathSplit[1];
    const newUrl = window.location.href.replace(`${pathSplitLang}`, `${lng}`);
    window.history.pushState({}, '', newUrl);
    i18next.changeLanguage(lng);
    window.location.reload();
  }
};