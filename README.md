
# Okapi Code Forge - Soluções Digitais


## 🚀 Landing Page Profissional

A Okapi Code Forge é uma empresa especializada em criar identidades digitais únicas para negócios de todos os portes. Nossa landing page apresenta:

- Design moderno e responsivo
- Navegação intuitiva
- Seções sobre serviços, projetos, contato e missão
- Temas claro/escuro
- SEO avançado e otimização para redes sociais
- Exemplos reais de projetos desenvolvidos

## 💡 Sobre a Okapi Code Forge

Inspirados pelo Okapi, animal raro e singular, acreditamos que cada negócio merece uma presença digital única. Forjamos soluções digitais sob medida, combinando criatividade, tecnologia de ponta e foco em resultados.




## 🖥️ Tecnologias Utilizadas

- **React 19**: Framework para interfaces modernas e dinâmicas
- **Vite**: Build tool ultrarrápida para projetos web
- **TypeScript**: Tipagem estática para JavaScript moderno
- **TailwindCSS**: Estilização rápida e responsiva via utilitários
- **Node.js**: Ambiente de execução para desenvolvimento e build
- **SEO otimizado**: Estrutura e meta tags para melhor indexação e compartilhamento

## 📱 Responsividade

A landing page se adapta perfeitamente a qualquer dispositivo: desktop, tablet ou smartphone.


## 🔗 Demonstração

Veja a landing page em funcionamento em seu próprio domínio ou hospedagem após o deploy.

## 🛠️ Como rodar localmente

**Pré-requisitos:** Node.js

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure sua chave Gemini API em `.env.local`:
   ```env
   GEMINI_API_KEY=coloque_sua_chave_aqui
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

Acesse `http://localhost:5173` no navegador.



## 📦 Deploy

### Deploy perfeito no Vercel

1. No painel do Vercel, selecione o projeto e configure:
   - **Framework Preset:** Vite
   - **Build Command:** `vite build`
   - **Output Directory:** `dist`

2. Certifique-se que o arquivo `index.html` está na raiz do projeto (como está).

3. O comando de build já está correto no `package.json`:
   ```json
   "build": "vite build"
   ```

4. Após o deploy, acesse a URL gerada pelo Vercel. Se aparecer erro 404, confira se o diretório de saída está como `dist` e se não há subpasta extra.

5. Para testar localmente o build antes do deploy:
   ```bash
   npm run build
   npm run preview
   ```
   Acesse o endereço informado no terminal para garantir que o site está funcionando.

Pronto para ser publicado também no GitHub Pages, Netlify ou qualquer serviço de hospedagem estática.

## 📞 Contato

- WhatsApp: [84 99868-5592](https://wa.me/5584998685592)
- Email: contato@okapicodeforge.com
- [GitHub](https://github.com/okapicodeforge)

---

© 2025 Okapi Code Forge. Todos os direitos reservados.
