import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './contexts/ThemeContext';

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


const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 2000); // 2 seconds

    return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-1000 ease-in-out ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!loading}
      >
        <SplashScreen />
      </div>

      <div className={`bg-white text-slate-700 dark:bg-space-black dark:text-gray-200 font-bai overflow-x-hidden transition-colors duration-500 ease-in ${!loading ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(126,34,206,0.15),_transparent_40%)] opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(240,15,176,0.1),_transparent_50%)] opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(10,189,198,0.1),_transparent_50%)] opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
        
        <Header />
        <main className="relative z-10">
          <Hero />
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Services />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <CTASection />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;