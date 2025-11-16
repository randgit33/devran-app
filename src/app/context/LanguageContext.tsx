'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language, Translation } from '../lib/il8n';

// Define what the context will provide
interface LanguageContextType {
  language: Language | null; // Allow null
  setLanguage: (language: Language) => void;
  t: Translation; // 't' will be the translation object
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // 1. --- FIX: Default to null ---
  // This represents that no choice has been made yet.
  const [language, setLanguageState] = useState<Language | null>(null);

  // Function to change language and save choice to localStorage
  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      console.warn("Could not save language to localStorage:", e);
    }
    setLanguageState(lang);
  };

  // 2. --- FIX: Handle null language ---
  // If language is null (modal is showing), default to 'en' translations.
  const t = language ? translations[language] : translations.en;

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