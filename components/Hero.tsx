import React from 'react';
import { useI18n } from '../contexts/I18nContext';

const Hero: React.FC = () => {
  const { t } = useI18n();
  const waText = encodeURIComponent(t.cta.whatsapp_message);
  const waLink = `https://wa.me/5584998685592?text=${waText}`;
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-white dark:bg-space-black opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-neon-cyan text-transparent bg-clip-text">
              {t.hero.title1}
            </span>
            <span className="block text-slate-900 dark:text-white">{t.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 dark:text-gray-300 mb-8">
            {t.hero.subtitle}
          </p>
          <a 
              href={waLink}                                                                      
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-primary text-slate-900 dark:text-gray-100 font-bold text-lg py-4 px-10 rounded-lg transition-all duration-300 transform hover:bg-accent hover:scale-105 shadow-[0_0_8px_#22D3EE] hover:shadow-[0_0_16px_#6366F1] focus:outline-none focus:ring-2 focus:ring-accent animate-pulse-glow"
            style={{ boxShadow: '0 0 8px #22D3EE' }}
          >
              {t.hero.cta}
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;