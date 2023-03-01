# Ambiente Sandbox

Para testar o `@mobk/engine` enquanto está no ambiente de Sandbox, basta executar o comando `yarn dev:run` para executar o aplicativo, e manter o `yarn dev:watch` ou `yarn dev:publish` em execução, para publicações constantes.

---

# Ambiente Standalone ou Full

Para testar o `@mobk/engine` enquanto está no ambiente de Standalone ou Full, garanta que seus pacotes estão todos atualizados utilizando o comando `yarn dev:watch` ou `yarn dev:publish`.

---

# Debug

O Debug pode ser feito utilizando o próprio React DevTools, ou através de uma configuração customizada do VSCode (React Native Debugger). **Ainda não temos um padrão definido para este formato.**

Lembre-se que qualquer `console.log()` feito na Engine será refletido para o aplicativo quando for publicado via `yarn dev:watch` ou `yarn dev:publish`.