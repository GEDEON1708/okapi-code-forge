import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-center mb-12 text-slate-900 dark:text-white">
        {children}
    </h2>
);

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  width: number;
  height: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, tags, liveUrl, repoUrl, width, height }) => {
  return (
  <div className="bg-white dark:bg-dark-purple/50 rounded-xl overflow-hidden border border-slate-200 dark:border-neon-cyan/30 flex flex-col group transition-all duration-500 ease-in-out hover:border-primary/80 dark:hover:shadow-[0_0_35px_#6366F1] transform hover:-translate-y-2 shadow-lg shadow-slate-200/50 dark:shadow-none">
      <div className="overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
          />
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-grow">
  <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-slate-500 dark:text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="bg-neon-cyan/20 text-neon-cyan text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
              {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-space-black bg-neon-cyan hover:bg-opacity-80 font-bold py-2 px-5 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(10,189,198,0.5)] transform hover:scale-105">Ver Site</a>}
          </div>
          {repoUrl && <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-500 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white group-hover:text-neon-cyan transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>GitHub</span>
          </a>}
        </div>
      </div>
    </div>
  )
};

const Projects: React.FC = () => {
  const mainProjects = [
    {
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      width: 1170,
      height: 780,
      title: "Busca Sousa",
      description: "Plataforma inovadora para conectar usuários a comércios e serviços locais na cidade de Sousa-PB, fortalecendo a economia local.",
      tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Firebase'],
      liveUrl: 'https://busca-sousa.vercel.app/',
      repoUrl: 'https://github.com/GEDEON1708/busca-sousa',
    },
    {
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      width: 764,
      height: 1146,
      title: "Okapi Watch Store",
      description: "E-commerce elegante para venda de relógios, com foco em uma experiência de usuário fluida e design sofisticado.",
      tags: ['React', 'Vite', 'Styled-Components'],
      liveUrl: 'https://okapi-watch-store.vercel.app',
      repoUrl: 'https://github.com/GEDEON1708/Okapi-Watch-Store',
    },
     {
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      width: 1171,
      height: 781,
      title: "Coffee Store Page",
      description: "Landing page imersiva para uma cafeteria, projetada para cativar os amantes de café com um visual aconchegante e informações ricas.",
      tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      liveUrl: 'https://coffe-page-eta.vercel.app',
      repoUrl: 'https://github.com/GEDEON1708/Coffe-page',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-100 dark:bg-dark-purple/20">
      <div className="container mx-auto px-6">
        <SectionTitle>
          Projetos em <span className="text-neon-cyan">Destaque</span>
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;