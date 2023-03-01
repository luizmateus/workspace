# Instalando o Workspace

```sh
git clone <repo-do-workspace>
cd <pasta-do-clone>
yarn
```

Inicialmente, faça o clone do repositório do Workspace. Este é o único clone manual que você precisará fazer.

Na sequência, entre na pasta que você clonou, e execute a instalação das dependências com Yarn. Neste momento, estamos instalando as dependências que serão utilizadas pelo Workspace para executar os scripts facilitadores, não o ambiente do aplicativo em si.

# Instalando o Ambiente

```sh
yarn env:init
```

Neste passo, começaremos a utilizar scripts pré-prontos do Workspace para facilitar nosso trabalho. Estamos chamando dois [Comandos de Ambientes](../commands/env.md).

O primeiro comando, `init`, serve para executar o clone de todos os repositórios necessários.

Na sequência, entrará em cada repositório, executar a instalação do Yarn nele, e já publicar uma versão inicial entre os repositórios.

Após executá-los, você já terá um ambiente pronto para desenvolvimento, com todos os repositórios clonados na branch padrão, e todas as instalações do Yarn atualizadas.

# Selecionando o Ambiente

```sh
yarn env:set
```

Após instalar o ambiente, é necessário selecionar o tipo de ambiente com o qual deseja trabalhar. Por exemplo, um desenvolvedor da área de Pix desenvolverá somente com aquele módulo, enquanto que um desenvolvedor de Design System utilizará somente o repositório de Design System.

Pensando nisso, e pelo fato de que trabalhar com múltiplos repositórios não é totalmente simples (e pode ser difícil manusear o ambiente de trabalho), deixamos o Workspace preparado para trabalhar com três tipos de desenvolvimentos diferentes.

Para selecionar o ambiente, executamos o comando `yarn env:set`. Temos 3 principais tipos de ambiente: `Sandbox`, `Standalone` e `Full`.

Para mais informações sobre cada um desses tipos de ambiente, o que cada um faz, e como eles funcionam, veja a documentação de [Comandos de Ambiente](../commands/env.md), na área do comando `yarn env:set`.

---

Próximo passo: [Desenvolvimento >> Pré-Requisitos](../development/general/prerequisites.md)
