import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

import pt from '../locales/pt.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const translations = { pt, en, fr };
export type Language = 'pt' | 'en' | 'fr';

// Usamos 'typeof pt' para garantir que todos os arquivos de idioma tenham a mesma estrutura
type TranslationKeys = typeof pt;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Carrega primeiro em PT, e somente altera se houver preferência salva
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem('lang')) as Language | null;
    if (stored === 'pt' || stored === 'en' || stored === 'fr') {
      setLanguageState(stored);
    }
  }, []);
  
  useEffect(() => {
    // Atualiza o atributo lang da tag <html> para acessibilidade e SEO
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, []);

  const t = translations[language];

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};