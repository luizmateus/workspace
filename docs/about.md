- [Main](#main)
      - [Sobre o repositório `@mobk/main`](#sobre-o-repositório-mobkmain)
      - [Estrutura](#estrutura)
- [Design System](#design-system)
      - [Sobre o repositório `@mobk/design-system`](#sobre-o-repositório-mobkdesign-system)
      - [Estrutura](#estrutura-1)
- [Engine](#engine)
      - [Sobre o repositório `@mobk/engine`](#sobre-o-repositório-mobkengine)
      - [Estrutura](#estrutura-2)
- [Modules](#modules)
      - [Sobre o repositório `@mobk/module-example`](#sobre-o-repositório-mobkmodule-example)
      - [Estrutura](#estrutura-3)

---

# Main

É o único repositório que contém, efetivamente, o aplicativo React Native.

Seu principal objetivo é ser o **ponto de entrada** dos modulos, nele tem o organização da **stack de navegação** dos módulos, **configurações do CI/CD**, **Fastlane**, e o **Registro dos Módulos**.

#### Sobre o repositório `@mobk/main`

O projeto `@mobk/main` é o mecanismo principal da aplicação do Banco Original, e contém todos os seus módulos. Dentre todos os repositórios envolvidos, `@mobk/main` é o único que contém efetivamente um aplicativo React Native, e é responsável por encapsular todos os outros módulos em um único executável.

Além disso, este projeto tem a responsabilidade de conter as configurações globais e definições de pipelines para geração das versões dos aplicativos.

#### Estrutura

    android/           #### Camada para geração do aplicativo Android.
    fastlane/          # Configuração CI/CD do aplicativo Android/iOS 
    ios/               # Camada para geração do aplicativo iOS.
    packager/          # Mapa dos módulos de inicialização, para o Bundle Splitting da aplicação.
    src/               # Documentação do projeto.
      modules/         # Integração dos módulos da aplicação.
      navigator/       # Integração do navegador da aplicação.
      sandbox/         # Ambiente de sandbox/teste para desenvolvimento.

---

# Design System

O Design System foi projetado para facilitar o desenvolvimento de interfaces, ele contém componentes de UI, assets e temas, em um nível ótimo de escalabilidade. Essa coleção de componentes está pronta para produção com **React Native**, seguindo as diretrizes definidas pelo time de UX e da empresa.

Ainda não foram definidas as bibliotecas de componentes que serão acopladas no Design System.

#### Sobre o repositório `@mobk/design-system`

O projeto `@mobk/design-system` é o mecanismo de design da aplicação `@mobk/main` e todos os seus módulos. Aqui ficarão agregados todos os componentes, temas, imagens, ícones, fontes e demais assets reutilizáveis para a aplicação.

Vale notar que o `@mobk/design-system` virá acoplado dentro do `@mobk/engine`. Ou seja, nenhum outro repositório instalará o `@mobk/design-system` por conta, e utilizará o `@mobk/engine` para acessá-lo. O `@mobk/engine` funcionará somente como um proxy, exportando tudo que existe dentro do `@mobk/design-system`.

Isso será feito para evitar que cada módulo utilize uma versão diferente do `@mobk/design-system`, e garantir o controle de versão do mesmo dentro do `@mobk/engine`.

Outro ponto importante é que todas as dependências no objeto `dependencies` do `package.json` do Design System serão automaticamente utilizadas quando ela é instalada na Engine. Dessa forma, se você instalou a biblioteca `native-base`, por exemplo, dentro do Design System, não há necessidade de re-instalar na Engine.

#### Estrutura

    demo/              # Aplicativo para o Storybook.
    src/               # Source do Projeto.
      assets/          # Agregado das imagens, fontes e ícones da aplicação.
      components/      # Componentes reutilizáveis da aplicação.
      layout/          # Componentes de layout reutilizáveis da aplicação.
      themes/          # Configuração de temas e Design Tokens da aplicação.
    __tests__/         # Implementação do testes unitários.

---

# Engine

É o mecanismo compartilhável da aplicação `@mobk/main` e todos os seus módulos. Aqui ficarão agregados todos os utilitários, **Native Modules**, **Zustand Global**, **Hooks** customizados, e quaisquer outras rotinas que necessitem de uso compartilhado entre os módulos.

#### Sobre o repositório `@mobk/engine`

Um exemplo seria um Native Module para leitura de código de barras. Ao invés de desenvolver uma solução para cada módulo que utilizar, deverá ser criado um único Native Module no `@mobk/engine`, que será exportado para uso em qualquer módulo.

Vale notar que o `@mobk/engine` sempre virá acoplado em todos os módulos por padrão. Ou seja, todo módulo nascerá com esta Engine pré-instalada e disponível para uso.

Outro ponto importante é que todas as dependências no objeto `dependencies` do `package.json` da Engine serão automaticamente utilizadas quando ela é instalada em outro módulo. Dessa forma, se você instalou a biblioteca `date-fns`, por exemplo, dentro da Engine, não há necessidade de re-instalar nos módulos destinos.

#### Estrutura

    __tests__/         # Implementação do testes unitários.
    mkdocs.yml         # Arquivo de configuração do MKDocs.
    docs/              # Documentação do projeto.
    android/           # Código nativo para Native Modules (Android).
    ios/               # Código nativo para Native Modules (iOS).
    src/               # Source do Projeto.
      api/             # Implementação da integração externa com APIs.
      contexts/        # Implementação de contextos globais.
      design-system/   # Exportação (proxy) do Design System.
      hooks/           # Implementação de hooks customizados.
      native-modules/  # Implementação de Native Modules.
      store/           # Implementação do Zustand global.
      types/           # Implementação e exportação de Types/Interfaces.
      utils/           # Implementação de utilitários gerais.

---

# Modules

Cada módulo é responsável por implementar telas e regras de negócios específicas para o produto. Suas principais características são gerenciamento de estado próprio, com escopo fechado e acessado somente por ele.

#### Sobre o repositório `@mobk/module-example`

O projeto `@mobk/module-example` é apenas um repositório que contém um exemplo de módulo, no qual todos os módulos da aplicação se basearão para desenvolvimento. Cada módulo será, então, acoplado no `@mobk/main`.

O mecanismo compartilhável da aplicação, `@mobk/engine`, assim como bibliotecas de navegação (React Navigation) e estilização (Styled Components) já virão pré-instaladas neste repositório de exemplo.

A principal regra de qualquer módulo é o fato de que eles possuem apenas uma única exportação: um `Stack Navigator`. Como o React Navigation aceita aninhamento de navegadores, este `Stack Navigator` é integrado dentro do `@mobk/main` como uma das rotas disponíveis da aplicação.

#### Estrutura

    __tests__/         # Implementação do testes unitários e e2e.
    src/               # Source do Projeto.
      components/      # Implementação de componentes específicos para o módulo.
      features/        # Implementação de páginas e sub-módulos.
      navigation/      # Unificação das páginas e sub-módulos em um único Stack Navigator.
      store/           # Implementação do Store global.
      services/        # Implementação de chamadas de serviços.
        domain/        # Implementação de tipagem para cada use-case.
        infra/         # Implementação de hooks para cada microservice.
        use-cases/     # Implementação de hooks para cada rota de micro-service.
