import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enUsTrans from "../public/locales/en.json";
import zhCnTrans from "../public/locales/zh-cn.json";

i18n
  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    // Match prerendered HTML; restore the browser language after hydration.
    lng: "en",
    detection: { caches: [] },
    resources: {
      en: {
        translation: enUsTrans,
      },
      zh: {
        translation: zhCnTrans,
      },
    },
    preload: ["en"],
    fallbackLng: { zh: ["zh"], default: ["en"] },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export function restoreBrowserLanguage() {
  const detected = i18n.services.languageDetector.detect();
  const language = Array.isArray(detected) ? detected[0] : detected;
  if (language) i18n.changeLanguage(language);
  const persistLanguage = (nextLanguage) => {
    try {
      window.localStorage.setItem("i18nextLng", nextLanguage);
    } catch {
      // Language switching also works when browser storage is unavailable.
    }
  };
  i18n.on("languageChanged", persistLanguage);
  return () => i18n.off("languageChanged", persistLanguage);
}
