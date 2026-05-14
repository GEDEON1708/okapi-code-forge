import React from 'react';
import { MoonStar, Sun, ArrowLeft } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const PrivacyPolicy: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative z-10">
      <header className="sticky top-0 z-20 bg-white/85 dark:bg-black/45 backdrop-blur-lg border-b border-slate-200/70 dark:border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-2 text-slate-700 dark:text-gray-200 hover:text-primary transition-colors">
            <ArrowLeft size={18} />
            <span className="font-bai font-medium text-sm">Voltar para o site</span>
          </a>

          <div className="flex flex-col justify-center">
            <span className="font-orbitron font-bold text-xl leading-tight tracking-[0.15em] bg-gradient-to-r from-primary via-accent to-neon-cyan text-transparent bg-clip-text">
              OKAPI
            </span>
            <span className="font-bai font-semibold text-xs leading-tight tracking-[0.2em] -mt-1 text-primary">
              CODE FORGE
            </span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 hover:bg-slate-200/70 dark:hover:bg-white/10 transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? (
              <MoonStar size={22} strokeWidth={2.2} className="text-neon-cyan" />
            ) : (
              <Sun size={22} strokeWidth={2.2} className="text-yellow-500" />
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 md:py-14">
        <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/95 dark:bg-space-black/60 backdrop-blur-sm shadow-sm p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-3">
            Última atualização: março de 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Política de Privacidade
          </h1>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
            Esta Política de Privacidade descreve como a Okapi Code Forge - Soluções Digitais Sob Medida coleta, usa,
            compartilha e protege dados pessoais. O documento foi elaborado para atender à Lei Geral de Proteção de Dados
            (Lei nº 13.709/2018 - LGPD) e aos requisitos de transparência exigidos por plataformas como Google Ads.
          </p>
          <div className="mt-6 rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4 text-sm leading-relaxed">
            <p><strong>Empresa:</strong> Okapi Code Forge - Soluções Digitais Sob Medida</p>
            <p><strong>CNPJ:</strong> 56.115.254/0001-00</p>
            <p><strong>Site:</strong> www.okapicodeforge.com.br</p>
            <p><strong>URL desta política:</strong> www.okapicodeforge.com.br/politica-de-privacidade</p>
            <p><strong>E-mail:</strong> okapicodeforge@gmail.com</p>
            <p><strong>WhatsApp:</strong> (84) 99995-2710</p>
            <p><strong>Encarregado (DPO):</strong> Gedeon Kalala Kashomona</p>
          </div>
        </section>

        <div className="mt-8 grid gap-6">
          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">1. Introdução</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300">
              A Okapi Code Forge valoriza sua privacidade e trata seus dados com responsabilidade, segurança e transparência.
              Ao acessar nosso site e utilizar nossos canais de contato, você concorda com os termos desta política.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">2. Quais dados coletamos</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300 mb-3">Podemos coletar:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-gray-300">
              <li><strong>Dados fornecidos voluntariamente:</strong> nome, e-mail, telefone, empresa e mensagem.</li>
              <li><strong>Dados coletados automaticamente:</strong> IP, tipo de navegador, páginas acessadas, tempo de navegação e cookies.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">3. Como usamos seus dados</h2>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-gray-300">
              <li>Atendimento comercial e resposta a solicitações.</li>
              <li>Prestação dos serviços contratados.</li>
              <li>Melhoria da experiência no site e dos nossos processos.</li>
              <li>Ações de marketing, quando houver consentimento.</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">4. Compartilhamento de Dados</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300 mb-3">
              Não vendemos dados pessoais. O compartilhamento pode ocorrer apenas quando necessário, por exemplo:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-gray-300">
              <li>Ferramentas de análise, como Google Analytics.</li>
              <li>Plataformas de anúncios, como Google Ads e Meta Ads.</li>
              <li>Autoridades públicas, quando exigido por lei.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">5. Cookies e Tecnologias Semelhantes</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300 mb-3">
              Cookies são pequenos arquivos armazenados no seu dispositivo para melhorar a navegação.
              Utilizamos cookies dos seguintes tipos:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-gray-300 mb-3">
              <li><strong>Essenciais:</strong> necessários para funcionamento do site.</li>
              <li><strong>Analíticos:</strong> para entender uso e desempenho.</li>
              <li><strong>Marketing:</strong> para personalização de anúncios.</li>
            </ul>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300">
              Você pode gerenciar cookies nas configurações do navegador e, quando aplicável, em banners de consentimento.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">6. Armazenamento e Segurança</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300 mb-3">
              Adotamos medidas técnicas e organizacionais para proteger os dados pessoais, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-gray-300">
              <li>Criptografia SSL nas comunicações.</li>
              <li>Controle de acesso restrito aos dados.</li>
              <li>Rotinas de backup.</li>
              <li>Monitoramento de integridade e segurança.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">7. Seus direitos (LGPD)</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300 mb-3">
              Nos termos da LGPD, você pode solicitar:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-gray-300">
              <li>Confirmação da existência de tratamento e acesso aos dados.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação, quando cabível.</li>
              <li>Portabilidade dos dados, observados os limites legais.</li>
              <li>Informações sobre compartilhamentos realizados.</li>
              <li>Revogação do consentimento, quando essa for a base legal.</li>
            </ul>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300 mt-3">
              Responderemos as solicitações em até 15 dias úteis, nos termos da legislação aplicável.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">8. Retenção dos Dados</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300">
              Os dados são armazenados pelo tempo necessário para cumprir as finalidades desta política, obrigações legais
              e exigências regulatórias. Após esse período, os dados são eliminados com segurança ou anonimizados, quando possível.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">9. Links para Sites de Terceiros</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300">
              Nosso site pode conter links para plataformas externas. Esta Política de Privacidade não se aplica a sites de terceiros,
              sendo recomendável ler as políticas próprias de cada serviço acessado.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">10. Alterações nesta Política</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300">
              Esta política pode ser atualizada periodicamente. Sempre que houver mudanças relevantes, publicaremos a nova versão
              nesta página com a respectiva data de atualização.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">11. Contato - Encarregado de Dados (DPO)</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300">
              Para exercer seus direitos ou esclarecer dúvidas sobre privacidade e proteção de dados, entre em contato com:
            </p>
            <div className="mt-3 text-slate-600 dark:text-gray-300 leading-relaxed">
              <p><strong>Nome:</strong> Gedeon Kalala Kashomona</p>
              <p><strong>E-mail:</strong> okapicodeforge@gmail.com</p>
              <p><strong>WhatsApp:</strong> (84) 99995-2710</p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/55 p-6">
            <h2 className="text-2xl font-bold mb-3">12. Consentimento</h2>
            <p className="leading-relaxed text-slate-600 dark:text-gray-300">
              Ao utilizar o site da Okapi Code Forge e fornecer seus dados pessoais, você declara que leu, compreendeu e concorda
              com os termos desta Política de Privacidade.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
