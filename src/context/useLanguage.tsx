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
    window != undefined && localStorage.getItem("preferredLanguage") !== null
      ? localStorage.getItem("preferredLanguage") as string
      : "en"
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
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
