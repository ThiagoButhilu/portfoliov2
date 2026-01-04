import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPT from './locales/pt-BR/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  'pt-BR': {
    translation: translationPT
  },
  'en': {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'pt-BR', // idioma padrão
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false // react já faz escape
    }
  });

export default i18n;

