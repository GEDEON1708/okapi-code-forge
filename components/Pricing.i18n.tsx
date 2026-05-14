import React, { useEffect, useRef, useState } from 'react';
import { Check, Minus, Zap, Network, Briefcase, Crown } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const COMPANY_WHATSAPP = '5584999952710';

const buildWhatsAppUrl = (message: string) =>
  `https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}&text=${encodeURIComponent(message)}`;

type PlanKey = 'presenca' | 'nexus' | 'negocio' | 'elite';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  key: PlanKey;
  icon: React.ReactNode;
  badge?: string;
  features: PlanFeature[];
  whatsappMessage: string;
  cta: string;
  highlighted: boolean;
  accentColor: string;
  glowColor: string;
  topGradient: string;
}

const Pricing: React.FC = () => {
  const { t } = useI18n();
  const p = t.pricing;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const plans: Plan[] = [
    {
      key: 'presenca',
      icon: <Zap className="w-7 h-7 text-neon-cyan" aria-hidden="true" />,
      highlighted: false,
      accentColor: 'text-neon-cyan',
      glowColor: 'rgba(10,189,198,0.18)',
      topGradient: 'from-neon-cyan/70 via-accent/50 to-transparent',
      features: p.plans.presenca.features,
      whatsappMessage: p.plans.presenca.whatsapp_message,
      cta: p.cta,
    },
    {
      key: 'nexus',
      icon: <Network className="w-7 h-7 text-neon-green" aria-hidden="true" />,
      highlighted: false,
      accentColor: 'text-neon-green',
      glowColor: 'rgba(0,229,160,0.18)',
      topGradient: 'from-neon-green/70 via-accent/50 to-transparent',
      features: p.plans.nexus.features,
      whatsappMessage: p.plans.nexus.whatsapp_message,
      cta: p.cta,
    },
    {
      key: 'negocio',
      icon: <Briefcase className="w-7 h-7 text-primary" aria-hidden="true" />,
      badge: p.popular_badge,
      highlighted: true,
      accentColor: 'text-primary',
      glowColor: 'rgba(99,102,241,0.25)',
      topGradient: 'from-primary via-accent to-neon-cyan',
      features: p.plans.negocio.features,
      whatsappMessage: p.plans.negocio.whatsapp_message,
      cta: p.cta,
    },
    {
      key: 'elite',
      icon: <Crown className="w-7 h-7 text-neon-pink" aria-hidden="true" />,
      highlighted: false,
      accentColor: 'text-neon-pink',
      glowColor: 'rgba(240,15,176,0.18)',
      topGradient: 'from-neon-pink/70 via-primary/50 to-transparent',
      features: p.plans.elite.features,
      whatsappMessage: p.plans.elite.whatsapp_message,
      cta: p.cta,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-20 md:py-28 bg-slate-50 dark:bg-dark-purple/15 relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-neon-cyan/10 dark:bg-neon-cyan/15 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-neon-pink/5 dark:bg-neon-pink/10 blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-xs font-bold font-orbitron uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30 px-4 py-1.5 rounded-full mb-4">
            {p.title1}
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-neon-cyan text-transparent bg-clip-text">
              {p.title2}
            </span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const planData = p.plans[plan.key];
            return (
              <div
                key={plan.key}
                className={`group relative flex flex-col rounded-2xl transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${plan.highlighted ? 'scale-[1.03] md:scale-[1.05] z-10' : ''}`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* Animated glow border for highlighted */}
                {plan.highlighted && (
                  <div
                    className="absolute -inset-[1.5px] rounded-2xl z-0"
                    style={{
                      background: 'linear-gradient(135deg, #6366f1, #0abdc6, #f00fb0, #6366f1)',
                      backgroundSize: '300% 300%',
                      animation: 'gradientBorder 4s ease infinite',
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Card body */}
                <div
                  className={`relative z-10 flex flex-col flex-1 rounded-2xl overflow-hidden border transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ${
                    plan.highlighted
                      ? 'border-transparent bg-white dark:bg-dark-purple/80'
                      : 'border-slate-200/80 dark:border-white/10 bg-white dark:bg-white/5 hover:border-neon-cyan/40 dark:hover:border-neon-cyan/30'
                  }`}
                  style={{
                    boxShadow: plan.highlighted
                      ? `0 8px 40px ${plan.glowColor}, 0 0 0 0 transparent`
                      : undefined,
                  }}
                >
                  {/* Top color bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${plan.topGradient}`} />

                  {/* Popular badge */}
                  {plan.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <span
                        className="relative overflow-hidden inline-block bg-gradient-to-r from-primary to-neon-cyan text-white text-[10px] font-bold font-orbitron px-3 py-1 rounded-full shadow-lg tracking-widest uppercase"
                      >
                        <span
                          className="absolute inset-0 w-full h-full"
                          style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                            animation: 'shimmer 2.5s infinite',
                            backgroundSize: '200% 100%',
                          }}
                          aria-hidden="true"
                        />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-7 flex flex-col flex-1">
                    {/* Icon + title */}
                    <div className={`flex items-center gap-4 mb-3 ${plan.badge ? 'pt-7' : ''}`}>
                      <div
                        className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                          plan.highlighted
                            ? 'bg-primary/10 dark:bg-primary/20'
                            : plan.key === 'elite'
                            ? 'bg-neon-pink/10'
                            : plan.key === 'nexus'
                            ? 'bg-neon-green/10'
                            : 'bg-neon-cyan/10'
                        }`}
                        style={{ boxShadow: `0 0 20px ${plan.glowColor}` }}
                      >
                        {plan.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-0.5">
                          {planData.category}
                        </p>
                        <h3 className="text-2xl font-orbitron font-bold text-slate-900 dark:text-white leading-tight">
                          {planData.name}
                        </h3>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm text-slate-500 dark:text-gray-400 mb-5 italic leading-relaxed">
                      "{planData.tagline}"
                    </p>

                    {/* Divider */}
                    <div
                      className={`h-px w-full mb-5 bg-gradient-to-r ${plan.topGradient}`}
                      style={{ opacity: 0.4 }}
                    />

                    {/* Features */}
                    <ul className="space-y-2.5 flex-1 mb-7">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {feature.included ? (
                            <span
                              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                                plan.highlighted
                                  ? 'bg-primary/15'
                                  : plan.key === 'elite'
                                  ? 'bg-neon-pink/15'
                                  : 'bg-neon-cyan/15'
                              }`}
                            >
                              <Check className={`w-3 h-3 ${plan.accentColor}`} />
                            </span>
                          ) : (
                            <Minus className="w-5 h-5 mt-0.5 flex-shrink-0 text-slate-300 dark:text-gray-600" />
                          )}
                          <span
                            className={`text-sm leading-relaxed ${
                              feature.included
                                ? 'text-slate-700 dark:text-gray-200'
                                : 'text-slate-400 dark:text-gray-600 line-through decoration-slate-300 dark:decoration-gray-700'
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href={buildWhatsAppUrl(plan.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn relative overflow-hidden w-full flex items-center justify-center gap-2 font-bold font-orbitron text-sm py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-primary to-neon-cyan text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_4px_30px_rgba(10,189,198,0.55)] focus:ring-neon-cyan'
                          : plan.key === 'elite'
                          ? 'bg-gradient-to-r from-neon-pink/85 to-primary text-white shadow-md hover:shadow-[0_4px_24px_rgba(240,15,176,0.35)] focus:ring-neon-pink'
                          : 'border-2 border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/10 focus:ring-neon-cyan'
                      }`}
                    >
                      {/* Shimmer on hover */}
                      <span
                        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 1.5s infinite',
                        }}
                        aria-hidden="true"
                      />
                      <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p
          className={`text-center text-sm text-slate-400 dark:text-gray-500 mt-12 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {p.footer_note}
        </p>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes gradientBorder {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
