import React from 'react';
import { useI18n } from '../contexts/I18nContext';

const Maintenance: React.FC = () => {
  const { t } = useI18n();
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-space-black">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-[1px] animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <div className="mx-auto mb-12 relative w-32 h-32">
          {/* Main Forge Animation */}
          <div className="absolute inset-0 border-4 border-neon-cyan/30 rounded-full animate-spin-slow" />
          <div className="absolute inset-2 border-4 border-primary/40 rounded-full animate-reverse-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-neon-cyan to-primary rounded-xl animate-pulse shadow-[0_0_40px_rgba(10,189,198,0.5)] rotate-45" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-6 tracking-tighter">
          <span className="bg-gradient-to-r from-neon-cyan via-white to-primary bg-clip-text text-transparent">
            {t.maintenance.title}
          </span>
        </h1>
        
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8" />

        <p className="text-lg md:text-xl text-text-secondary font-bai leading-relaxed mb-10">
          {t.maintenance.subtitle}
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          <span className="text-sm font-orbitron uppercase tracking-widest text-white/70">
            {t.maintenance.tip}
          </span>
        </div>
      </div>
      
      {/* CSS-in-JS for extra animations not in Tailwind theme yet */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-reverse-spin {
          animation: spin 5s linear reverse infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Maintenance;

