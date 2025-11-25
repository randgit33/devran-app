'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language, Translation } from '../lib/il8n';

// Define what the context will provide
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation; // 't' will be the translation object
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage === 'en' || storedLanguage === 'id') {
        setLanguageState(storedLanguage);
      }
    } catch (e) {
      console.warn("Could not read language from localStorage:", e);
    }
  }, []);

  // Function to change language and save choice to localStorage
  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      console.warn("Could not save language to localStorage:", e);
    }
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to easily use the context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};