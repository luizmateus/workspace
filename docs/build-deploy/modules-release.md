# Semantic Release

A biblioteca `semantic-release` é a responsável por controlar o versionamento do pacote, assim como a publicação de novas releases e tags.

As configurações estão descritas abaixo, e podem ser identificadas no arquivo `release.config.js`.

---

# master (@latest)

Consta a versão do pacote que deve ser utilizada para versões de Produção.

Para instalar a versão deste pacote, basta utilizar a tag `latest`.

```sh
yarn add @mobk/<lib-name>@latest
```

Os artefatos desta versão são:

- `package.json` - Novo código de versão será atualizado no arquivo.

- `CHANGELOG.md` - Conterá as alterações e os respectivos códigos de versão.

---

# develop (@rc)

Consta a versão do pacote que deve ser utilizada para versões de Homologação e Desenvolvimento. No arquivo de configuração, está marcado como `prerelease`, o que irá gerar uma tag e release no GitLab com um identificador `rc` (Release Candidate).

Para instalar a versão deste pacote, basta utilizar a tag `rc`.

```sh
yarn add @mobk/design-system@rc
```

Os artefatos desta versão são:

- `CHANGELOG_rc.md` - Conterá as alterações e os respectivos códigos de versão da Release Candidate.