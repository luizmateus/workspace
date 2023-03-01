Este é um TL;DR (Too Long;Didn't Read) da preparação do ambiente, com uma explicação básica dos comandos necessários, feito para quem quer prepará-lo sem detalhes de como funciona.

Para ver os detalhes, acesse [Configuração do Ambiente (Manual)](./config-env-manual.md). Os comandos são os mesmos entre esses documentações, o que muda é a verbosidade das explicações. Todos os comandos devem ser executados dentro do repositório do Workspace.

```sh
# Clonar o repositório Workspace
git clone <repo-do-workspace>
cd <pasta-do-clone>

# Instalar Workspace
yarn

# Inicializar o ambiente
yarn env:init

# Selecionar o ambiente
yarn env:set

# Em um terminal apartado, inicializar o publicador de repositórios
yarn dev:publish

# Executar o aplicativo
yarn dev:run
```

---

Próximo passo: [Desenvolvimento >> Pré-Requisitos](../development/general/prerequisites.md)
