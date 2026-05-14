# Segurança

Este projeto é um site estático. Boas práticas adotadas:

- Sem chaves/segredos versionados no cliente. Variáveis sensíveis devem ficar fora do bundle e em ambientes seguros.
- Dependências atualizadas via npm audit periodicamente.
- Atributo `lang` atualizado conforme o idioma para melhorar acessibilidade e SEO.
- Links externos com `rel="noopener noreferrer"`.

Para reportar vulnerabilidades, por favor abra um issue privado no GitHub ou entre em contato diretamente pelo e-mail do repositório.
