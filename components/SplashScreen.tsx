import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-space-black select-none">
        {/* Immersive background gradients */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-0 dark:opacity-100"></div>
      
        {/* The logo with a pulsing glow animation */}
        <div className="text-center dark:animate-pulse-glow">
            <span className="font-orbitron font-extrabold text-5xl sm:text-6xl md:text-8xl leading-none tracking-widest bg-gradient-to-r from-neon-pink via-purple-500 to-neon-cyan text-transparent bg-clip-text">
                OKAPI
            </span>
            <span className="block font-bai font-bold text-xl sm:text-2xl md:text-3xl tracking-[0.4em] mt-2 text-brand-red">
                CODE FORGE®
            </span>
        </div>
    </div>
  );
};

export default SplashScreen;