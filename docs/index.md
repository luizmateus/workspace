# Introdução

Antes de mergulhar profundamente na configuração e introduzí-lo no projeto, é importante entender os conceitos básicos da arquitura e seu entendimento.

Neste trecho introdutório, vamos apresentar os principais alicerces da aplicação `@mobk/main`.

---

# Arquitetura Base

![Alt text](./img/arch.png 'Arquitetura')

A arquitetura usa a abordagem de **multi-repo**, e foi organizada com os repositórios `@mobk/main`, `@mobk/engine` e `@mobk/design-system`. Além desses principais, existem os repositórios `modules` que são organizados por regras de negócios e BU (Business Unit).

Alguns exemplos de módulos:

- `@mobk/module-example`
- `@mobk/module-login`
- `@mobk/module-home`
- `@mobk/module-cartoes`
- `@mobk/module-pix`

---

# Premissas

A arquitetura parte das seguintes premissas:

#### Main

Conheça mais sobre o **Main** em sua própria seção, [clicando aqui](./about.md).

- O `main` é o único repositório que contém, efetivamente, um aplicativo React Native;

- O `main` é responsável por garantir o versionamento da `engine` através do _yarn resolutions_;

- O `main` é responsável por agregar cada Navigator dos repositórios do tipo `module` em um Navigator pai principal;

#### Engine

Conheça mais sobre a **Engine** em sua própria seção, [clicando aqui](./about.md).

- A `engine` foi gerada com o React Native Builder Bob;

- A `engine` é exportada como uma biblioteca de componentes compatível com React Native;

- A `engine` agrega todas as funcionalidades compartilhadas da aplicação, incluindo SDKs e integrações;

- A `engine` é o único repositório compartilhado, de forma a evitar dependências cíclicas e complexidade de governança;

#### Design System

Conheça mais sobre o **Design System** em sua própria seção, [clicando aqui](./about.md).

- O `design system` foi gerado com o React Native Builder Bob;

- O `design system` é exportado como uma biblioteca de componentes compatível com React Native;

- O `design system` agrega todos os componentes, assets e temas compartilhados da aplicação;

- O `design system` é instalado somente na `engine`, de forma a evitar muitas dependências, e garantir que cada módulo consiga acessar o `design system` através da engine (fazendo com que a `engine` seja somente um _proxy_), e que o controle de versão do `design system` fique somente na `engine`;

#### Modules

Conheça mais sobre os **Modules** em sua própria seção, [clicando aqui](./about.md).

- Cada `module` é gerado com o React Native Builder Bob;

- Cada `module` é exportado como um Stack Navigator;

- Cada `module` é responsável por implementar telas e regras de negócio específicas para o produto;

- Cada `module` possui um contexto próprio, com escopo fechado e acessado somente por ele;

- Cada `module` possui acesso aos contextos globais, pois são implementados no repositório `engine`;

- Cada `module` possui o repositório engine instalado para ter acesso às funcionalidades compartilhadas;
