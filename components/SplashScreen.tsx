import React from 'react';




const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center select-none transition-all duration-700 overflow-hidden" style={{background: 'linear-gradient(135deg, #272640 0%, #05020a 100%)'}}>
      {/* Fundo animado tecnológico */}
      <div className="absolute inset-0 w-full h-full pointer-events-none animate-bg-move">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', left: 0, top: 0}}>
          <ellipse cx="960" cy="540" rx="700" ry="320" fill="url(#grad1)" opacity="0.18">
            <animate attributeName="rx" values="700;750;700" dur="3s" repeatCount="indefinite" />
            <animate attributeName="ry" values="320;350;320" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <defs>
            <radialGradient id="grad1" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
              <stop offset="0%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#05020a" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Glow atrás do logo com movimento */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-glow-move">
        <div style={{
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126,34,206,0.22) 0%, rgba(39,38,64,0.7) 60%, rgba(5,2,10,0.95) 100%)',
          filter: 'blur(32px)',
          boxShadow: '0 0 80px 30px #272640, 0 0 120px 60px #05020a',
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
          50% { transform: scale(1.05) translateY(-20px); }
          100% { transform: scale(1) translateY(0); }
        }
        .animate-bg-move {
          animation: bgMove 3s ease-in-out infinite;
        }
        @keyframes glowMove {
          0% { transform: scale(1) translateY(0); opacity: 0.8; }
          50% { transform: scale(1.08) translateY(-10px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 0.8; }
        }
        .animate-glow-move {
          animation: glowMove 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;