import enLang from './entries/en-us';
import itLang from './entries/it-it';
import vnLang from './entries/vi-vn';
import esLang from './entries/es-es';

export const AppLanguages = [
  {
    languageId: 'vietnamese',
    locale: 'vi',
    name: 'Vietnamese',
    icon: 'vn',
  },
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  {
    languageId: 'italian',
    locale: 'it',
    name: 'Italiano',
    icon: 'it',
  },
  {
    languageId: 'spanish',
    locale: 'es',
    name: 'Spanish',
    icon: 'es',
  },
];

const AppLocale = {
  en: enLang,
  vi: vnLang,
  it: itLang,
  es: esLang,
};

export default AppLocale;
