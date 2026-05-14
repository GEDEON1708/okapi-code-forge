import React from 'react';
import { useI18n } from '../contexts/I18nContext';
import { Globe, Rocket, ShoppingBag, TrendingUp, Sparkles } from 'lucide-react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 text-slate-900 dark:text-white">
    {children}
  </h2>
);

const Services: React.FC = () => {
  const { t } = useI18n();
  const cards = [
    {
      key: 'business',
      icon: <Globe className="w-6 h-6 text-neon-cyan" aria-hidden="true" />,
      title: t.services.cards.business.title,
      description: t.services.cards.business.description,
    },
    {
      key: 'landing',
      icon: <Rocket className="w-6 h-6 text-neon-cyan" aria-hidden="true" />,
      title: t.services.cards.landing.title,
      description: t.services.cards.landing.description,
    },
    {
      key: 'ecommerce',
      icon: <ShoppingBag className="w-6 h-6 text-neon-cyan" aria-hidden="true" />,
      title: t.services.cards.ecommerce.title,
      description: t.services.cards.ecommerce.description,
    },
    {
      key: 'traffic',
      icon: <TrendingUp className="w-6 h-6 text-neon-cyan" aria-hidden="true" />,
      title: t.services.cards.traffic.title,
      description: t.services.cards.traffic.description,
    },    {
      key: 'more',
      icon: <Sparkles className="w-6 h-6 text-neon-cyan" aria-hidden="true" />,
      title: t.services.cards.more.title,
      description: t.services.cards.more.description,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <SectionTitle>
          {t.services.title1} <span className="text-neon-cyan">{t.services.title2}</span>
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {cards.map((c) => (
            <div key={c.key} className="p-6 rounded-2xl bg-slate-100/80 dark:bg-dark-purple/30 border border-slate-200/70 dark:border-white/10 hover:border-neon-cyan/50 transition-colors">
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-neon-cyan/10">
                {c.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{c.title}</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

