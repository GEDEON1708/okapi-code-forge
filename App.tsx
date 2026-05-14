import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer.i18n';
import Maintenance from './components/Maintenance';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nProvider } from './contexts/I18nContext';
import SeoHead from './components/SeoHead';

const About    = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services.i18n'));
const Projects = lazy(() => import('./components/Projects.i18n'));
const CTASection = lazy(() => import('./components/CTASection'));
const Pricing  = lazy(() => import('./components/Pricing.i18n'));

// Componente wrapper para aplicar animações de scroll
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Anima apenas uma vez
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Ativa quando 10% da seção está visível
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};


let _splashDone = false;

const PageLayout: React.FC<{ children: React.ReactNode; padTop?: boolean }> = ({ children, padTop = true }) => {
  const maintenanceOn = localStorage.getItem('maintenance') === 'true';
  return (
    <div className="dot-grid bg-white text-slate-700 dark:bg-space-black dark:text-gray-200 font-bai overflow-x-hidden transition-colors duration-500 ease-in">
      {maintenanceOn && <Maintenance />}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(126,34,206,0.15),_transparent_40%)] opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(240,15,176,0.1),_transparent_50%)] opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(10,189,198,0.1),_transparent_50%)] opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <Header />
      <main className={`relative z-10 ${padTop ? 'pt-20 md:pt-24' : ''}`}>
        <AnimatedSection>{children}</AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(!_splashDone);

  useEffect(() => {
    if (_splashDone) return;
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setLoading(false);
      _splashDone = true;
      document.body.style.overflow = 'auto';
    }, 2300);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className={`fixed inset-0 z-[100] transition-opacity duration-1000 ease-in-out ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <SplashScreen />
      </div>
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <PageLayout padTop={false}>
          <Hero />
        </PageLayout>
      </div>
    </>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <I18nProvider>
      <SeoHead />
      <Suspense fallback={<div className="min-h-screen bg-white dark:bg-space-black" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/sobre" element={<PageLayout><About /></PageLayout>} />
          <Route path="/servicos" element={<PageLayout><Services /></PageLayout>} />
          <Route path="/projetos" element={<PageLayout><Projects /></PageLayout>} />
          <Route path="/planos" element={<PageLayout><Pricing /></PageLayout>} />
          <Route path="/contato" element={<PageLayout><CTASection /></PageLayout>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </I18nProvider>
  </ThemeProvider>
);

export default App;