import { createContext, useContext, useState, useEffect } from 'react';
import { clientData } from '../config/clientData';

const LanguageContext = createContext();

/**
 * Lightweight, zero-dependency i18n Context Provider
 * Handles active language ('pt' | 'en'), localStorage persistence, and HTML lang sync.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site_lang') || 'pt';
    }
    return 'pt';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_lang', lang);
      document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
    }
  }, [lang]);

  const activeData = clientData[lang] || clientData.pt;

  const value = {
    lang,
    setLang,
    data: activeData,
    colors: clientData.colors,
    shared: clientData.shared,
  };

  return (
    <LanguageContext.Provider value={value}>
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
