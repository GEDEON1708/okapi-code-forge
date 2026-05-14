import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext';

const Hero: React.FC = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const waText = encodeURIComponent(t.cta.whatsapp_message);
  const waLink = `https://wa.me/5584999952710?text=${waText}`;
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-white/78 dark:bg-space-black/76" />
      <div className="absolute left-[8%] top-24 h-36 w-36 rounded-full bg-primary/10 blur-3xl dark:bg-primary/18" aria-hidden="true" />
      <div className="absolute right-[10%] top-36 h-40 w-40 rounded-full bg-neon-cyan/10 blur-3xl dark:bg-neon-cyan/14" aria-hidden="true" />

      <div className="relative z-10 container mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in-up max-w-5xl">
          <h1 className="mb-4 text-5xl font-orbitron font-black tracking-tighter md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-primary via-accent to-neon-cyan text-transparent bg-clip-text">
              {t.hero.title1}
            </span>
            <span className="block text-slate-900 dark:text-white">{t.hero.title2}</span>
          </h1>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-slate-600 dark:text-gray-300 md:text-xl">
            {t.hero.subtitle}
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass btn-glass-primary inline-block font-bold text-lg py-4 px-10 transition-all duration-300 transform hover:scale-105 focus:outline-none animate-pulse-glow"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button onClick={() => navigate('/sobre')} aria-label="Ver sobre">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
