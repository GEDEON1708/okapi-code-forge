import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 text-center bg-slate-100 dark:bg-gradient-to-t dark:from-dark-purple dark:to-space-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-slate-900 dark:text-white">
          Pronto para <span className="text-neon-pink">Forjar</span> seu Futuro Digital?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 dark:text-gray-300 mb-8">
          Sua ideia merece uma identidade digital única. Vamos conversar sobre como podemos transformar sua visão em realidade.
        </p>
        <a 
          href="https://wa.me/5584998685592?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20forjar%20meu%20projeto%20digital."
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-neon-cyan text-space-black font-bold text-lg py-4 px-10 rounded-lg transition-all duration-300 transform hover:bg-opacity-80 shadow-[0_0_20px_rgba(10,189,198,0.6)] hover:scale-105"
        >
          Iniciar Projeto
        </a>
      </div>
    </section>
  );
};

export default CTASection;