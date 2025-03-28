import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Deepfake Detector',
      upload: 'Upload Video',
      verify: 'Verify Link',
      analyzing: 'Analyzing...',
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido al Detector de Deepfakes',
      upload: 'Subir Video',
      verify: 'Verificar Enlace',
      analyzing: 'Analizando...',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;