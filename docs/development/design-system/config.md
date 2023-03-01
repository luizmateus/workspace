# Comandos

```sh
yarn env:set        # Selecionar Sandbox
yarn design:prepare # Preparar ambiente
```

---

# Sobre

O desenvolvimento deste repositório é reservado para a equipe de Design System. Para o desenvolvedor de outros módulos, ele fica disponível como _read-only_, para que seja possível a execução da aplicação.

Neste repositório, devem ser desenvolvidos os componentes, temas e assets aplicação como um todo. Saiba mais: [Arquitetura do Design System](../../about.md)

Para desenvolver o Design System, abra um terminal no Workspace e execute o comando `yarn design:prepare`, para atualizar as instalações do repositório de Design System e seu aplicativo demonstrativo (Storybook).

Feito isso, execute `yarn design:web` para iniciar o server do Storybook na máquina, que pode ser acessado em [http://localhost:8001](http://localhost:8001). Execute `yarn design:android` ou `yarn design:ios` para executar o Storybook na plataforma de sua escolha. Caso queira trocar a porta de execução, basta alterá-lo no `package.json` do aplicativo `demo` (lembre-se de não subir essa alteração no _commit_).

Com esses comandos em execução, você pode desenvolver os seus componentes na raiz do repositório `@mobk/design-system`, e testá-los dentro do aplicativo `demo` que se encontra no mesmo repositório. Ao desenvolver na raiz, a versão do Design System dentro do aplicativo `demo` é atualizada automaticamente. Os componentes devem ser desenvolvidos na raiz do repositório, enquanto que sua documentação por Storybook deve ser feita dentro do aplicativo `demo`.

Veja mais informações: [Comandos de Design System](../../commands/design.md)

> **_DICA:_** Nem todos os componentes funcionarão na versão Web. Caso encontre algum problema, execute somente na plataforma nativa.

> **_DICA:_** O aplicativo `demo` serve apenas para a implementação do Storybook, e nunca será publicado. Ele também será ignorado na publicação do pacote do `@mobk/design-system`, portanto tudo que há nele serve apenas para documentação do Storybook e testes de desenvolvimento.

---

# Ambiente Recomendado

Recomendamos o uso do tipo de desenvolvimento `Sandbox` ao executar o comando `yarn env:set`. Contudo, o ideal é utilizar o próprio aplicativo `demo` com Storybook para o desenvolvimento.

