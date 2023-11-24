import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa los archivos de traducción
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";
import translationDE from "./locales/de/translation.json";

// Recursos de traducción
const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  de: { translation: translationDE },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // idioma por defecto
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
