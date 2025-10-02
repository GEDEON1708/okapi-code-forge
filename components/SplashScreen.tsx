import React from 'react';




const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center select-none transition-all duration-700 overflow-hidden" style={{background: 'linear-gradient(135deg, #272640 0%, #05020a 100%)'}}>
      {/* Fundo gradiente estático */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{background: 'linear-gradient(135deg, #272640 0%, #05020a 100%)'}} />

      {/* Glow atrás do logo, sem animação */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126,34,206,0.32) 0%, rgba(39,38,64,0.7) 60%, rgba(5,2,10,0.95) 100%)',
          filter: 'blur(48px)',
        }} />
      </div>

      {/* Logo com animação de entrada */}
      <div className="text-center animate-splash-in relative">
        <span className="font-orbitron font-extrabold text-5xl sm:text-6xl md:text-8xl leading-none tracking-widest bg-gradient-to-r from-white via-[#7e22ce] to-neon-cyan text-transparent bg-clip-text drop-shadow-2xl">
          OKAPI
        </span>
        <span className="block font-bai font-bold text-xl sm:text-2xl md:text-3xl tracking-[0.4em] mt-2 text-brand-red drop-shadow">
          CODE FORGE®
        </span>
      </div>

      {/* Removido animações para carregamento mais rápido */}
    </div>
  );
};

export default SplashScreen;