import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 text-slate-900 dark:text-white">
        {children}
    </h2>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-100 dark:bg-dark-purple/20">
      <div className="container mx-auto px-6">
        <SectionTitle>
          Inspirados pela <span className="text-neon-cyan">Singularidade</span>
        </SectionTitle>
        <div className="max-w-4xl mx-auto text-center text-slate-600 dark:text-gray-300 text-lg space-y-6 leading-relaxed">
          <p>
            O Okapi, um animal enigmático da floresta tropical, é conhecido por sua pelagem única - uma mistura que desafia a categorização. Nenhuma pelagem é igual à outra. Essa diversidade inspiradora é o cerne da nossa filosofia na Okapi Code Forge.
          </p>
          <p>
            Acreditamos que cada negócio, assim como o Okapi, possui uma identidade singular que merece ser destacada. Rejeitamos soluções genéricas. Em vez disso, mergulhamos na essência da sua marca para forjar uma presença digital que é inconfundivelmente sua.
          </p>
          <p className="font-bold text-slate-800 dark:text-white">
            Nossa missão é criar uma solução digital tão única quanto a sua visão, combinando design futurista com a mais robusta tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;