
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ta from "./tn.json";
import ml from "./ml.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        ta: { translation: ta },
        ml: { translation: ml },
    },

    lng: "en",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },

    react: {
        useSuspense: false,
    },
});

export default i18n;
