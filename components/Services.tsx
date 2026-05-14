import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 text-slate-900 dark:text-white">
        {children}
    </h2>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-dark-purple/50 p-8 rounded-xl border border-slate-200 dark:border-primary/30 group hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-lg shadow-slate-200/50 dark:shadow-none">
  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-orbitron font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-500 dark:text-gray-400">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      title: "Sites Empresariais",
      description: "Nosso serviço de criação de sites constrói a presença online da sua empresa com uma plataforma profissional, responsiva e otimizada para SEO.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>,
      title: "Landing Pages",
      description: "Páginas de destino focadas em conversão, com design cativante e copy persuasiva para maximizar o resultado de suas campanhas de marketing.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "E-commerce",
      description: "Lojas virtuais completas, seguras e escaláveis. Ofereça a melhor experiência de compra para seus clientes e impulsione suas vendas online.",
    },
     {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: "E muito mais...",
      description: "Nossa forja está sempre ativa. Em breve, ofereceremos novas soluções digitais para levar seu negócio a patamares ainda mais altos. Fique ligado!",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionTitle>
          Nossos <span className="text-primary">Serviços</span>
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;