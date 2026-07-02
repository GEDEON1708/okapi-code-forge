import React from 'react';
import { useI18n } from '../contexts/I18nContext';

const Footer: React.FC = () => {
  const { t } = useI18n();
  return (
    <footer className="py-12 md:py-16 bg-slate-100 dark:bg-dark-purple/10 border-t border-slate-200/70 dark:border-white/10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex flex-col justify-center mb-3">
            <span className="font-orbitron font-bold text-xl leading-tight tracking-[0.15em] bg-gradient-to-r from-primary via-accent to-neon-cyan text-transparent bg-clip-text">OKAPI</span>
            <span className="font-bai font-semibold text-xs leading-tight tracking-[0.2em] -mt-1 text-primary">CODE FORGE®</span>
          </div>
          <p className="text-slate-600 dark:text-gray-300 text-sm max-w-sm">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{t.footer.contact_title}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://wa.me/5584999952710" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp: +55 84 99995-2710</a>
            </li>
            <li>
              <a href="mailto:okapicodeforge@gmail.com" className="text-primary hover:underline">okapicodeforge@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{t.footer.social_title}</h4>
          <div className="flex items-center gap-4 text-sm">
            <a href="https://github.com/GEDEON1708" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
            <a href="https://www.instagram.com/okapi.code?igsh=MWRmZ3pseDc1OHZ0NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-slate-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} OKAPI CODE FORGE — {t.footer.rights}</p>
        <a
          href="/politica-de-privacidade"
          className="mt-2 inline-block text-primary hover:underline"
        >
          {t.footer.privacy_policy}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
