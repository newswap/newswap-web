import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import {initReactI18next} from 'react-i18next';

import enUsTrans from "../public/locales/en.json";
import zhCnTrans from "../public/locales/zh-cn.json";

i18n.

use(LanguageDetector)

.use(initReactI18next) 

.init({
  resources: {
    en: {
      translation: enUsTrans,
    },
    zh: {
      translation: zhCnTrans,
    },
  },
  preload: ['en'],
  fallbackLng: { 'zh': ['zh'], 'default': ['en'] },
  debug: false,
  interpolation: {
    escapeValue: false, 
  },
})

export default i18n;