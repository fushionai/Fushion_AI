"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";

interface LanguageContextType {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "",
  changeLanguage: () => {},
});
interface LanguageProviderProps {
  children: ReactNode;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(
    "en"
  );

  useEffect(() => {
    if (window != undefined) {
      const preferredLanguage = localStorage.getItem("preferredLanguage");
      if (preferredLanguage !== null) {
        setLanguage(preferredLanguage);
      } else {
        setLanguage("en");
      }
    }
  }, []);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
    document.cookie = `language=${newLanguage}; path=/; max-age=${60 * 60 * 24 * 365}`; // Expires in 1 year
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
