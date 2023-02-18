import i18n from 'i18next';
import en from './assets/locals/en/en.json';
import ua from './assets/locals/ua/ua.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// export const defaultNS = 'en';
export const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
} as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',
    // ns: ['en', 'ua'],
    // defaultNS,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
