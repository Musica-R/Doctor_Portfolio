import { createContext, useState } from "react";
import languageData from "../Data/data.json";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const value = {
    lang,
    setLang,
    t: languageData[lang]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
