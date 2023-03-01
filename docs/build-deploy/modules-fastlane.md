Abaixo constam os detalhes das Lanes do Fastlane dos módulos, que tem o explícito propósito de serem acionadas pelas esteiras de publicação de módulos.

---

## Build

```sh
# Formato
fastlane build
```

Executa o build do projeto, instalando todas as dependências do projeto, e gerando a pasta `lib`. Possui a inteligência de diferenciar entre pacots `rc` e `latest` conforme a _branch_ informada na variável de ambiente `CI_COMMIT_BRANCH`.

Veja mais informações em: [Módulo (Build)](./modules-build.md)

---

## Release

```sh
# Formato
fastlane release
```

Executa a publicação do projeto através do Semantic Release.

Veja mais informações em: [Módulo (Release)](./modules-release.md)

