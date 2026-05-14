import React from 'react';




const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center select-none transition-all duration-700 overflow-hidden" style={{background: 'linear-gradient(135deg, #18181B 0%, #18181B 60%, #232334 100%)'}}>
      {/* Fundo gradiente escuro, mate e elegante */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{background: 'linear-gradient(135deg, #18181B 0%, #18181B 60%, #232334 100%)'}} />

      {/* Glow suave atrás do logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(34,211,238,0.18) 60%, rgba(24,24,27,0.92) 100%)',
          filter: 'blur(36px)',
        }} />
      </div>

      {/* Logo igual à navegação, com gradiente tecnológico */}
      <div className="text-center animate-splash-in relative">
        <span className="font-orbitron font-extrabold text-5xl sm:text-6xl md:text-8xl leading-none tracking-widest bg-gradient-to-r from-primary via-accent to-neon-cyan text-transparent bg-clip-text drop-shadow-2xl">
          OKAPI
        </span>
        <span className="block font-bai font-semibold text-xl sm:text-2xl md:text-3xl tracking-[0.2em] mt-2 text-primary drop-shadow">
          CODE FORGE®
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;