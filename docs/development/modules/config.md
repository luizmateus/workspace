# Comandos

```sh
# Em um terminal
yarn dev:publish

# Em outro terminal
yarn env:set # Selecionar Standalone, e escolher o seu módulo
yarn dev:run
```

---

# Sobre

O desenvolvimento dos repositórios de módulos é reservado para a equipe daquela área de negócio.

Neste tipo de repositório, devem ser desenvolvidas funcionalidades que façam parte daquela área de negócio, utilizando os componentes do Design System e as rotinas compartilhadas pela Engine (ambos obtidos através do `@mobk/engine`). Saiba mais: [Arquitetura dos Modules](../../about.md)

Ao executar `yarn dev:run`, executará o aplicativo na respectiva plataforma, já abrindo também o bundler do Metro, exibindo um seletor de plataforma. Para atualizar com o código desenvolvido, entre no terminal que está executando o `yarn dev:publish`, e selecione seu módulo para publicar (caso queira atualizar algum módulo). Caso esteja usando o `yarn dev:watch`, a publicação ocorrerá automaticamente.

---

# Ambiente Recomendado

Recomendamos o uso do tipo de desenvolvimento `Standalone` ao executar o comando `yarn env:set`.
