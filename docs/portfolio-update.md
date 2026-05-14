# Atualização de Portfólio — Okapi Code Forge (v0.2.0)

Nesta nova versão, o site ganhou suporte multilíngue completo (Português, Inglês e Francês), mantendo o mesmo design e performance, mas com uma experiência internacionalizada e mais acolhedora.

## O que mudou

- Seletor de idiomas no Header (PT/EN/FR) com persistência entre visitas.
- Todo o conteúdo principal é traduzido por idioma (Hero, About, CTAs; demais seções seguem o mesmo padrão de i18n via arquivos JSON).
- Mensagens de WhatsApp pré-preenchidas na língua escolhida, garantindo contato contextual e profissional.
- Melhoria de acessibilidade e SEO com o atributo `lang` do documento atualizado dinamicamente.

## Por que ter opções de idioma

- Tornar a comunicação mais clara e empática para públicos diferentes.
- Ampliar o alcance internacional do estúdio, sem comprometer a identidade visual.
- Melhorar SEO internacional e a taxa de conversão em contatos (copy local, CTA local).

## Aspectos técnicos

- Contexto de i18n leve com React (Provider + hook), arquivos de tradução tipados (PT/EN/FR).
- LocalStorage para manter a preferência do usuário.
- Links de WhatsApp com mensagens localizadas (codificadas via `encodeURIComponent`).
- Estrutura pronta para adicionar novos idiomas e chaves de texto sem tocar no layout.

## Próximos passos (opcionais)

- Consolidar i18n em todas as seções remanescentes e adicionar testes de interface (smoke/E2E).
- Adaptar metadados/OG tags por idioma (quando necessário) para reforçar SEO internacional.
