import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES, translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('ceylon_heaven_lang') || 'en';
  });

  const languageObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    localStorage.setItem('ceylon_heaven_lang', currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = languageObj.dir || 'ltr';
  }, [currentLang, languageObj]);

  const changeLanguage = (code) => {
    if (LANGUAGES.some((l) => l.code === code)) {
      setCurrentLang(code);
    }
  };

  // Helper function to resolve dot notation keys like 'nav.home'
  const t = (keyPath, fallback = '') => {
    const keys = keyPath.split('.');
    let currentDict = translations[currentLang];
    
    for (const key of keys) {
      if (currentDict && currentDict[key] !== undefined) {
        currentDict = currentDict[key];
      } else {
        // Fallback to English dictionary if missing in target lang
        let engDict = translations.en;
        for (const k of keys) {
          if (engDict && engDict[k] !== undefined) {
            engDict = engDict[k];
          } else {
            return fallback || keyPath;
          }
        }
        return engDict;
      }
    }
    
    return typeof currentDict === 'string' ? currentDict : fallback || keyPath;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, languageObj, changeLanguage, t, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
