# Ambiente Standalone ou Full

Para testar repositórios `@mobk/module-*` enquanto está no ambiente de Standalone ou Full, garanta que seus pacotes estão todos atualizados utilizando o comando `yarn dev:watch` ou `yarn dev:publish`.

---

# Debug

O Debug pode ser feito utilizando o próprio React DevTools, ou através de uma configuração customizada do VSCode (React Native Debugger). **Ainda não temos um padrão definido para este formato.**

Lembre-se que qualquer `console.log()` feito em algum Module será refletido para o aplicativo quando for publicado via `yarn dev:watch` ou `yarn dev:publish`.