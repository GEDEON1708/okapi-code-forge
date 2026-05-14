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

const SUPPORTED: Language[] = ['pt', 'en', 'fr'];

function detectDeviceLanguage(): Language {
  const stored = localStorage.getItem('lang') as Language | null;
  if (stored && SUPPORTED.includes(stored)) return stored;

  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const lang of browserLangs) {
    const code = lang.toLowerCase();
    if (code.startsWith('pt')) return 'pt';
    if (code.startsWith('fr')) return 'fr';
    if (code.startsWith('en')) return 'en';
  }
  return 'pt'; // fallback padrão
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectDeviceLanguage);

  useEffect(() => {
    // Reavalia ao montar (garante SSR-safe)
    setLanguageState(detectDeviceLanguage());
  }, []);
  
  useEffect(() => {
    // Atualiza o atributo lang da tag <html> para acessibilidade e SEO
    const htmlLangMap: Record<Language, string> = {
      pt: 'pt-br',
      en: 'en',
      fr: 'fr'
    };
    document.documentElement.lang = htmlLangMap[language];
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