import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files for English and French
import en from '../../locales/en.json';
import fr from '../../locales/fr.json';

// Initialize i18next with translation files
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en, // English translations
    },
    fr: {
      translation: fr, // French translations
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;