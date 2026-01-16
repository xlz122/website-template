import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    supportedLngs: ['zh-CN', 'zh-TW', 'en-US'],
    fallbackLng: 'zh-CN',
    load: 'currentOnly',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/src/i18n/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
