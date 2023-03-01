# Sobre o repositório `@mobk/workpace`

O repositório `@mobk/workspace` tem a única responsabilidade de ser um conjunto de ferramentas auxiliares para os desenvolvedores.

Este repositório não é utilizado para qualquer Pipeline, Deploy ou fluxo oficial do Banco Original. A ideia é que ele funcione como um _cockpit_ para o desenvolvedor - um local onde ele possa concentrar seu trabalho, e tenha scripts que auxiliem no seu dia-a-dia.

---

# Como funciona?

Dentro do `package.json` do `@mobk/workspace`, na seção de `scripts`, existem vários comandos pré-definidos que foram desenvolvidos e pensados no dia-a-dia do desenvolvedor.

Esses comandos vão desde instalar o ambiente e clonar os repositórios automaticamente, até manter um Hot Reload automático.

Você pode verificar os comandos disponíveis nestas documentações:

- [Comandos de Ambiente](../commands/env.md)

- [Comandos de Desenvolvimento](../commands/dev.md)

- [Comandos de Design System](../commands/design.md)

---

# Começando

Após clonar o repositório `@mobk/workspace`, execute o comando `yarn` para instalar as dependências. Essas dependências não serão do aplicativo em si, mas sim do ambiente do Workspace.

Feito isso, prepare seu ambiente com base no Workspace, seguindo o fluxo definido nas próximas documentações.

---

Próximo passo: [Primeiros Passos >> Configuração do Ambiente (Automático)](./config-env-auto.md) ou [Primeiros Passos >> Configuração do Ambiente (Manual)](./config-env-manual.md)
