
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, MoonStars } from 'lucide-react';



const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-400 hover:bg-[#272640]/30 dark:hover:bg-[#05020a]/30 focus:outline-none transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <MoonStars size={24} strokeWidth={2.2} className="text-neon-cyan" />
      ) : (
        <Sun size={24} strokeWidth={2.2} className="text-yellow-300" />
      )}
    </button>
  );
};


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Projetos', href: '#projects' },
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
            <span className="font-orbitron font-bold text-xl leading-tight tracking-[0.15em] text-slate-900 dark:text-white">OKAPI</span>
            <span className="font-bai font-semibold text-xs leading-tight tracking-[0.2em] -mt-1 text-brand-red">CODE FORGE®</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-600 dark:text-gray-300 hover:text-neon-pink transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/5584998685592" target="_blank" rel="noopener noreferrer" className="bg-neon-pink text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_10px_rgba(240,15,176,0.5)]">
            Contato
          </a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center space-x-2">
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
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-slate-600 dark:text-gray-300 hover:text-neon-pink transition-colors duration-300 font-medium text-lg py-2">
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/5584998685592" target="_blank" rel="noopener noreferrer" className="bg-neon-pink text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_10px_rgba(240,15,176,0.5)] mt-2">
              Entre em Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;