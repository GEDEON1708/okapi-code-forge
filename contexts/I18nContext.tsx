import React, { createContext, useState, useEffect, useContext } from 'react';

import pt from '/locales/pt.json' assert { type: 'json' };
import en from '/locales/en.json' assert { type: 'json' };
import fr from '/locales/fr.json' assert { type: 'json' };

const translations = { pt, en, fr };
type Language = 'pt' | 'en' | 'fr';

// Usamos 'typeof pt' para garantir que todos os arquivos de idioma tenham a mesma estrutura
type TranslationKeys = typeof pt;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    // Detecta o idioma do navegador na montagem inicial
    const userLang = navigator.language.split('-')[0] as Language;
    if (userLang === 'en' || userLang === 'fr') {
      setLanguage(userLang);
    } else {
      setLanguage('pt'); // Padrão para português
    }
  }, []);
  
  useEffect(() => {
    // Atualiza o atributo lang da tag <html> para acessibilidade e SEO
    document.documentElement.lang = language;
  }, [language]);

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