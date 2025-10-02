import React from 'react';
import Logo from './Logo';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-neon-pink transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-space-black border-t border-slate-200 dark:border-gray-500/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-slate-500 dark:text-gray-400 max-w-xs">
              Forjando o futuro da web com código, criatividade e soluções singulares.
            </p>
          </div>
          
          <div>
            <h4 className="font-orbitron text-lg font-bold mb-4 text-slate-900 dark:text-white">Contato Rápido</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/5584998685592" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-300 hover:text-neon-cyan transition-colors">
                  WhatsApp: (84) 99868-5592
                </a>
              </li>
              <li>
                <a href="mailto:contato@okapicodeforge.com" className="text-slate-600 dark:text-gray-300 hover:text-neon-cyan transition-colors">
                  contato@okapicodeforge.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-lg font-bold mb-4 text-slate-900 dark:text-white">Siga-nos</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <SocialIcon href="https://github.com/okapicodeforge">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </SocialIcon>
              <SocialIcon href="#">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </SocialIcon>
               <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-gray-500/20 text-center text-slate-500 dark:text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Okapi Code Forge. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;