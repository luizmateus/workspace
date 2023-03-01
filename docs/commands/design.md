```sh
yarn design:<comando>
```

Os comandos de Design System devem ser executados conforme o formato acima.

O propósito desses comandos é facilitar o desenvolvimento de novos componentes e suas documentações com Storybook.

Comandos disponíveis:

- [Preparação de Ambiente](#preparação-de-ambiente)
      - [`yarn design:prepare` - Preparar Para Desenvolver](#yarn-designprepare---preparar-para-desenvolver)
- [Execução](#execução)
      - [`yarn design:web` - Executar Storybook/Web](#yarn-designweb---executar-storybookweb)
      - [`yarn design:android` - Executar Android](#yarn-designandroid---executar-android)
      - [`yarn design:ios` - Executar iOS](#yarn-designios---executar-ios)

---

# Preparação de Ambiente

#### `yarn design:prepare` - Preparar Para Desenvolver

Irá preparar e atualizar o ambiente para desenvolvimento do Design System, já levando em consideração do Storybook. Os comandos executados serão:

- Executar `yarn` no repositório do `@mobk/design-system`

- Executar `yarn` no repositório `demo` dentro do `@mobk/design-system`

- Executar `update-stories` no repositório `demo` dentro do `@mobk/design-system`, para atualizar o Storybook antes da execução.

Execute este comando para instalar o ambiente pela primeira. Utilize-o também para atualizar as histórias que foram escritas, caso as mesmas não estejam refletindo automaticamente.

---

# Execução

#### `yarn design:web` - Executar Storybook/Web

Executar o server local do Storybook, e também executá-lo na versão Web. Isso irá instanciar um server no terminal, que escutará em [https://localhost:8001](https://localhost:8001), e pode ser aberto no navegador para visualizar os componentes.

Vale notar que nem todos os componentes são compatíveis com a versão Web do React Native, então este servidor pode ser utilizado mais como um facilitador pontual.

#### `yarn design:android` - Executar Android

Executar o Storybook no Android. Isso irá acessar o aplicativo `demo` que se encontra dentro do `@mobk/design-system`, e executá-lo no Android. O servidor do Metro também será executado automaticamente, com o Hot Reload ativo.

Utilize este comando para desenvolver componentes para o Android, ou simplesmente para testá-los na plataforma.

#### `yarn design:ios` - Executar iOS

Executar o Storybook no iOS. Isso irá acessar o aplicativo `demo` que se encontra dentro do `@mobk/design-system`, e executá-lo no iOS. O servidor do Metro também será executado automaticamente, com o Hot Reload ativo.

Utilize este comando para desenvolver componentes para o iOS, ou simplesmente para testá-los na plataforma.
