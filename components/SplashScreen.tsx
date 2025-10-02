import React from 'react';


const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center select-none transition-all duration-700 bg-gradient-to-br from-neon-pink via-purple-500 to-neon-cyan">
      {/* Gradiente animado */}
      <div className="absolute inset-0 w-full h-full pointer-events-none animate-fade-in" style={{background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))'}}></div>

      {/* Logo com animação de entrada */}
      <div className="text-center animate-splash-in">
        <span className="font-orbitron font-extrabold text-5xl sm:text-6xl md:text-8xl leading-none tracking-widest bg-gradient-to-r from-neon-pink via-purple-500 to-neon-cyan text-transparent bg-clip-text drop-shadow-lg">
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
          animation: splashIn 1s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;