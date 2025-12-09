'use client';
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { fallbackLng, getOptions, languages } from './settings';
import { useParams } from 'next/navigation';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined,
    fallbackLng: fallbackLng,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    react: {
      useSuspense: false,
    },
    preload: runsOnServerSide ? languages : [],
  });
export default i18next;

export function useTranslation(lng?: string, ns?: string, options = {}) {
  const languaje = lng ?? (useParams().lng as string);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  if (runsOnServerSide && languaje && i18n.resolvedLanguage !== languaje) {
    i18n.changeLanguage(languaje);
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    useEffect(() => {
      if (!languaje || i18n.resolvedLanguage === languaje) return;
      i18n.changeLanguage(languaje);
    }, [languaje, i18n]);
  }
  return ret;
}
