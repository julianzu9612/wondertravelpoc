import { CLanguage } from '../../constants';

export const fallbackLng = CLanguage.lang;
export const languages = CLanguage.languages;
export const defaultNS = CLanguage.ns;

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    debug: false,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
