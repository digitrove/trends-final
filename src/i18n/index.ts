import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';
import deTranslations from '../locales/de.json';
import itTranslations from '../locales/it.json';
import esTranslations from '../locales/es.json';

const resources = {
  en: enTranslations,
  fr: frTranslations,
  de: deTranslations,
  it: itTranslations,
  es: esTranslations,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;