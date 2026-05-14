import React from 'react';
import ReactDOM from 'react-dom/client';
import PrivacyPolicy from './components/PrivacyPolicy';
import './styles.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nProvider } from './contexts/I18nContext';
import Footer from './components/Footer.i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <div className="relative min-h-screen bg-white text-slate-700 dark:bg-space-black dark:text-gray-200 font-bai overflow-x-hidden transition-colors duration-500 ease-in">
          <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(126,34,206,0.15),_transparent_40%)] opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
          <div className="pointer-events-none absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(240,15,176,0.1),_transparent_50%)] opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(10,189,198,0.1),_transparent_50%)] opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
          <PrivacyPolicy />
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>
);
