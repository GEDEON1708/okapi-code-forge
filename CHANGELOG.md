# Changelog

Todas as mudanças notáveis neste projeto serão documentadas aqui.

## [Unreleased]

- Refino geral do código, configurações do workspace do VS Code e documentação.

## [0.2.0] - 2025-10-30

### Adicionado

- Suporte completo a i18n (Português, Inglês e Francês) com `I18nProvider` e `useI18n`.
- Seletor de idiomas no Header com persistência em `localStorage` e acessibilidade (ESC/Click outside).
- Mensagens de WhatsApp localizadas para todos os CTAs (Hero, Header e CTASection).
- Arquivo de workspace `okapi-code-forge.code-workspace` e recomendações em `.vscode/`.

### Ajustado

- Sincronização do atributo `lang` na tag `<html>` conforme o idioma escolhido (melhora SEO e acessibilidade).

### Segurança

- Verificação de ausência de segredos sensíveis no repositório (preferência por variáveis de ambiente quando necessário).

### Próximos passos

- Consolidar i18n em todos os componentes (Services, Projects e Footer) caso remanesça algum texto estático.
- Adicionar testes de smoke via Playwright para garantir que o seletor de idioma afete toda a UI.

---
Formato inspirado em Keep a Changelog.
