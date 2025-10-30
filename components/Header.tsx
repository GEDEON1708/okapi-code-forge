
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, MoonStar, Languages } from 'lucide-react';
import { useI18n, type Language } from '../contexts/I18nContext';



const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-400 hover:bg-[#272640]/30 dark:hover:bg-[#05020a]/30 focus:outline-none transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <MoonStar size={24} strokeWidth={2.2} className="text-neon-cyan" />
      ) : (
        <Sun size={24} strokeWidth={2.2} className="text-yellow-300" />
      )}
    </button>
  );
};


// Seletor de Idiomas (desktop e mobile)
const LangSelector: React.FC = () => {
  const { language, setLanguage } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options: { code: Language; label: string }[] = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 dark:text-gray-200 hover:bg-slate-200/60 dark:hover:bg-white/10 border border-transparent hover:border-slate-300/30 dark:hover:border-white/10 transition-colors duration-200"
        aria-label="Selecionar idioma"
      >
        <Languages size={20} className="text-primary" />
        <span className="text-sm font-medium uppercase tracking-wide">{language}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-space-black border border-slate-200/70 dark:border-white/10 rounded-xl shadow-lg overflow-hidden z-50">
          {options.map((opt) => (
            <button
              key={opt.code}
              onClick={() => {
                setLanguage(opt.code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 hover:bg-slate-100 dark:hover:bg-white/10 ${language === opt.code ? 'text-primary font-semibold' : 'text-slate-700 dark:text-gray-200'}`}
              aria-label={`Mudar idioma para ${opt.label}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
  ];
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/30 backdrop-blur-lg border-b border-slate-200 dark:border-gray-500/20">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center">
          <div className="flex flex-col justify-center">
            <span className="font-orbitron font-bold text-xl leading-tight tracking-[0.15em] bg-gradient-to-r from-primary via-accent to-neon-cyan text-transparent bg-clip-text drop-shadow-2xl">OKAPI</span>
            <span className="font-bai font-semibold text-xs leading-tight tracking-[0.2em] -mt-1 text-primary">CODE FORGE®</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
              <a href="https://wa.me/5584998685592" target="_blank" rel="noopener noreferrer" className="bg-neon-cyan text-space-black font-bold py-2 px-5 rounded-lg transition-all duration-300 hover:bg-opacity-80 shadow-[0_0_10px_rgba(10,189,198,0.5)] transform hover:scale-105">
                {t.nav.contact}
          </a>
              <LangSelector />
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center space-x-2">
              <LangSelector />
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 dark:text-white focus:outline-none p-2 -m-2 rounded-md" aria-label="Abrir menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-space-black/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium text-lg py-2">
                {link.label}
              </a>
            ))}
                <a href="https://wa.me/5584998685592" target="_blank" rel="noopener noreferrer" className="bg-neon-pink text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_10px_rgba(240,15,176,0.5)] mt-2">
                  {t.nav.contact_mobile}
                </a>
                <div className="pt-2"><LangSelector /></div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;