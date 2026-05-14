import React from 'react';
import { useI18n } from '../contexts/I18nContext';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 text-slate-900 dark:text-white">
        {children}
    </h2>
);

const About: React.FC = () => {
  const { t } = useI18n();
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-100 dark:bg-dark-purple/15">
      <div className="container mx-auto px-6">
        <SectionTitle>
          {t.about.title1} <span className="text-neon-cyan">{t.about.title2}</span>
        </SectionTitle>
            <div className="max-w-4xl mx-auto text-center text-slate-600 dark:text-gray-300 text-lg space-y-6 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p className="font-bold text-slate-800 dark:text-white">{t.about.p3}</p>
            </div>
      </div>
  </section>
  );
};

export default About;