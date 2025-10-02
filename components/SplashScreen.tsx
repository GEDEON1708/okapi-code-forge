import React from 'react';




const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center select-none transition-all duration-700 overflow-hidden" style={{background: 'linear-gradient(135deg, #272640 0%, #05020a 100%)'}}>
      {/* Fundo gradiente estático */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{background: 'linear-gradient(135deg, #272640 0%, #05020a 100%)'}} />

      {/* Glow atrás do logo com movimento, sem borda */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-glow-move">
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

      {/* Animações customizadas */}
      <style>{`
        @keyframes splashIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-splash-in {
          animation: splashIn 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes bgMove {
          0% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.08) translateY(-30px); }
          100% { transform: scale(1) translateY(0); }
        }
        .animate-bg-move {
          animation: bgMove 1.5s ease-in-out infinite;
        }
        @keyframes glowMove {
          0% { transform: scale(1) translateY(0); opacity: 0.8; }
          50% { transform: scale(1.12) translateY(-18px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 0.8; }
        }
        .animate-glow-move {
          animation: glowMove 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;