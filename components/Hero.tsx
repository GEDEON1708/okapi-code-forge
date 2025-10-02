import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-white dark:bg-space-black opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-neon-pink via-purple-500 to-neon-cyan text-transparent bg-clip-text">
              Forjando Identidades
            </span>
            <span className="block text-slate-900 dark:text-white">Digitais Únicas</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 dark:text-gray-300 mb-8">
            Na Okapi Code Forge, especializamo-nos na criação de sites, landing pages e e-commerces com design e tecnologia que definem o futuro.
          </p>
          <a 
            href="https://wa.me/5584998685592?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-neon-pink text-white font-bold text-lg py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
          >
            Vamos Construir seu Futuro
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