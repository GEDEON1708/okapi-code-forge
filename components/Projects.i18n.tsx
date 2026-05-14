import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

/* â”€â”€â”€ Static data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const repoLinks: Record<string, string> = {
  busca_sousa:        'https://github.com/GEDEON1708/busca-sousa',
  okapi_watch:        'https://github.com/GEDEON1708/Okapi-Watch-Store',
  coffee_store:       'https://github.com/GEDEON1708/Coffe-page',
  cgk_consultoria:    'https://github.com/GEDEON1708/cgkconsultoria',
  okapi_flow:         'https://github.com/GEDEON1708/okapi-flow',
  regula_on:          'https://github.com/GEDEON1708/regulaOn',
  elite_moveis:       'https://github.com/GEDEON1708/Elite-moveis-luxury',
  auto_elite:         'https://github.com/GEDEON1708/Auto_Elite-Brasil',
  clinica_lumiere:    'https://github.com/GEDEON1708/clinica-lumiere',
  site_imobiliario:   'https://github.com/GEDEON1708/Site-imobiliario',
  site_empresarial:   'https://github.com/GEDEON1708/Site-Empresarial',
  auto_flow:          'https://github.com/GEDEON1708/Site-Empresarial_automa-o',
  erp_ocf:          'https://github.com/GEDEON1708/ERP-OCF',
};

const siteLinks: Record<string, string> = {
  busca_sousa:        'https://busca-sousa.vercel.app/',
  okapi_watch:        'https://okapi-watch-store.vercel.app/',
  coffee_store:       'https://coffe-page-eta.vercel.app/',
  regula_on:          'https://www.regulaon.com.br/',
  okapi_flow:         'https://okapi-flow.vercel.app/',
  cgk_consultoria:    'https://cgkconsultoria.vercel.app/',
  elite_moveis:       'https://elite-moveis-luxury.vercel.app/',
  auto_elite:         'https://auto-elite-brasil.vercel.app/',
  clinica_lumiere:    'https://clinica-lumiere.vercel.app/',
  site_imobiliario:   'https://site-imobiliario-self.vercel.app/',
  site_empresarial:   'https://site-empresarial-nu.vercel.app/',
  auto_flow:          'https://site-empresarial-automa-o.vercel.app/',
};

/* Gradientes de placeholder Ãºnicos por projeto */
const placeholderGradients: Record<string, string> = {
  busca_sousa:      'from-indigo-600 to-cyan-500',
  okapi_watch:      'from-slate-700 to-slate-500',
  coffee_store:     'from-amber-700 to-orange-500',
  cgk_consultoria:  'from-emerald-700 to-teal-500',
  okapi_flow:       'from-violet-700 to-purple-500',
  regula_on:        'from-blue-700 to-sky-500',
  elite_moveis:     'from-yellow-700 to-amber-500',
  auto_elite:       'from-red-700 to-rose-500',
  clinica_lumiere:  'from-pink-600 to-fuchsia-500',
  site_imobiliario:   'from-green-700 to-emerald-500',
  site_empresarial:   'from-stone-700 to-amber-600',
  auto_flow:          'from-cyan-700 to-blue-500',
  erp_ocf:          'from-orange-700 to-amber-500',
};

/* Imagens estaticas para projetos sem site ao vivo */
const staticPreviewImages: Record<string, string> = {
  erp_ocf: 'https://opengraph.githubassets.com/1/GEDEON1708/ERP-OCF',
};

/* Projetos que usam "Ver Plataforma" em vez de "Ver Site" */
const platformKeys = new Set(['erp_ocf', 'busca_sousa']);

/* â”€â”€â”€ Screenshot providers (tentados em cascata) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const makeScreenshotUrls = (url: string) => [
  // 1ï¸âƒ£ Microlink â€” screenshot sÃ­ncrono, imagem real (via redirect)
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`,
  // 2ï¸âƒ£ Thum.io com fresh para forÃ§ar nova captura (ignora cache)
  `https://image.thum.io/get/width/800/crop/440/noanimate/fresh/${encodeURIComponent(url)}`,
  // 3ï¸âƒ£ WordPress mshots como Ãºltimo recurso
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=440`,
];

/* â”€â”€â”€ Card preview component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const ProjectPreview: React.FC<{ projectKey: string; title: string }> = ({ projectKey, title }) => {
  const site = siteLinks[projectKey];
  const staticImg = staticPreviewImages[projectKey];
  const providers = site ? makeScreenshotUrls(site) : (staticImg ? [staticImg] : []);
  const [providerIdx, setProviderIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(providers.length === 0);
  const gradient = placeholderGradients[projectKey] ?? 'from-primary to-neon-cyan';

  const handleError = () => {
    const next = providerIdx + 1;
    if (next < providers.length) {
      setProviderIdx(next);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <div className="mb-5 h-44 w-full relative overflow-hidden rounded-xl group/img">
      {/* Placeholder gradient â€” visÃ­vel atÃ© carregar */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      >
        {!loaded && (
          <span className="absolute inset-0 flex items-center justify-center text-white/30 font-orbitron font-bold text-3xl tracking-widest select-none">
            {title.substring(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {/* Screenshot real */}
      {!allFailed && (
        <img
          key={providerIdx}
          src={providers[providerIdx]}
          alt={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 group-hover/img:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={handleError}
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

/* â”€â”€â”€ Main component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const VISIBLE = 3;   // cards visíveis no desktop
const AUTO_INTERVAL = 4500;

const Projects: React.FC = () => {
  const { t } = useI18n();

  const allKeys = [
    'regula_on', 'elite_moveis', 'clinica_lumiere', 'site_imobiliario',
    'site_empresarial', 'auto_flow', 'auto_elite', 'okapi_flow', 'erp_ocf', 'okapi_watch',
    'cgk_consultoria', 'busca_sousa', 'coffee_store',
  ];

  const cards = allKeys.map((key) => ({
    key,
    title:       (t.projects.cards as Record<string, { title: string; description: string }>)[key]?.title       ?? key,
    description: (t.projects.cards as Record<string, { title: string; description: string }>)[key]?.description ?? '',
  }));

  const total = cards.length;
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Mobile: mostrar 1 de cada vez
  // Ajusta cards visíveis por breakpoint: 1 (< 640px), 2 (640-1023px), 3 (≥ 1024px)
  const [visibleCount, setVisibleCount] = useState(VISIBLE);
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setVisibleCount(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Garante que o índice não ultrapasse o limite ao trocar de breakpoint
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, total - visibleCount)));
  }, [visibleCount, total]);

  const maxIndex = Math.max(0, total - visibleCount);

  const goTo = useCallback((next: number) => {
    if (animating) return;
    setAnimating(true);
    setIndex(Math.max(0, Math.min(next, maxIndex)));
    setTimeout(() => setAnimating(false), 400);
  }, [animating, maxIndex]);

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused, maxIndex]);

  const cardWidthPct = 100 / visibleCount;
  const translatePct = index * cardWidthPct;
  const dots = maxIndex + 1;

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white/50 dark:bg-transparent overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 text-slate-900 dark:text-white">
          {t.projects.title1}{' '}
          <span className="bg-gradient-to-r from-neon-cyan to-primary text-transparent bg-clip-text">
            {t.projects.title2}
          </span>
        </h2>
        <p className="text-center text-slate-500 dark:text-gray-400 mb-12 text-sm">
          {index + 1}–{Math.min(index + visibleCount, total)} / {total}
        </p>

        {/* Carousel wrapper */}
        <div className="relative px-9 sm:px-11">
          {/* Botão anterior */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-space-black/80 backdrop-blur-sm text-slate-700 dark:text-white shadow-lg transition-all duration-200 hover:scale-110 hover:border-neon-cyan/60 hover:text-neon-cyan disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-[420ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ transform: `translateX(-${translatePct}%)` }}
            >
              {cards.map((c) => (
                <div
                  key={c.key}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${cardWidthPct}%` }}
                >
                  <div className="h-full p-6 rounded-2xl bg-slate-100/80 dark:bg-space-black/40 border border-slate-200/70 dark:border-white/10 hover:border-neon-cyan/50 dark:hover:border-neon-cyan/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
                    <ProjectPreview projectKey={c.key} title={c.title} />
                    <h3 className="text-lg font-orbitron font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                      {c.description}
                    </p>
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={siteLinks[c.key] ?? repoLinks[c.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass btn-glass-cyan flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        {platformKeys.has(c.key) ? t.projects.cta_platform : t.projects.cta_view}
                      </a>
                      <a
                        href={repoLinks[c.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass btn-glass-ghost flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                      >
                        <Github className="w-3.5 h-3.5" aria-hidden="true" />
                        {t.projects.cta_github}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-space-black/80 backdrop-blur-sm text-slate-700 dark:text-white shadow-lg transition-all duration-200 hover:scale-110 hover:border-neon-cyan/60 hover:text-neon-cyan disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8" role="tablist" aria-label="Navegação dos projetos">
          {Array.from({ length: dots }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir para projeto ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-7 h-2.5 bg-neon-cyan shadow-[0_0_8px_rgba(10,189,198,0.7)]'
                  : 'w-2.5 h-2.5 bg-slate-300 dark:bg-white/20 hover:bg-neon-cyan/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

