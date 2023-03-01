- [Publicar Pacote(s)](#publicar-pacotes)
- [Publicar Pacote(s) Automaticamente](#publicar-pacotes-automaticamente)

# Publicar Pacote(s)

```sh
yarn dev:publish
```

Como descrito anteriormente, a cada nova alteração desenvolvida, é necessário publicar e atualizar os pacotes localmente. Para facilitar esse processo, criamos um comando de publicação.

O comando `yarn dev:publish` executa um terminal contínuo, que pergunta para o desenvolvedor quais módulos ele deseja publicar. Ele pode selecionar os módulos com a **barra de espaço**, e apertar **enter** para publicá-los.

Esse processo irá:

- Copiar o código alterado para os projetos de destino;

- Gerar a pasta `lib` com os Types, CommonJS e ESModules;

- Executar `yarn` nos projetos de destino caso tenha alguma alteração no `package.json`.

---

# Publicar Pacote(s) Automaticamente

```sh
yarn dev:watch
```

Através do comando `yarn dev:publish`, o desenvolvedor deve sempre escolher manualmente os módulos para publicar e atualizar. Contudo, é possível automatizar esse processo, utilizando uma técnica conhecida como **Hot Reload**.

O comando `yarn dev:watch` executa um terminal contínuo, que observa as alterações nos repositórios, e dispara o processo de publicação quando identificar que houve alguma alteração. Dessa forma, o desenvolvedor não precisará selecionar manualmente quando quiser novas publicações.

Vale notar que este processo não substituirá o comando `yarn dev:publish`, mas funciona como uma alternativa. Cabe ao desenvolvedor escolher qual opção encaixa melhor com seu processo de desenvolvimento.

Esse processo irá:

- Observar as alterações feitas nos repositórios, com exceção de algumas pastas como `node_modules`, `lib`, etc;

- Executar o mesmo processo que o `yarn dev:publish` para publicar o módulo que sofreu alterações;
