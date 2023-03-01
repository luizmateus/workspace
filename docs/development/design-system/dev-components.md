# Como Funciona?

O design system tem o propósito de facilitar a construção de uma tela utilizando componentes reutilizáveis.

---

# Criando Componente

Dentro da pasta `src/components`, crie uma sub-pasta com o nome do seu componente utilizando antes do nome do componente a sigla DS. Por exemplo: `src/components/DSText`.

Dentro dessa pasta, crie um arquivo `index.tsx`, com a configuração padrão abaixo:

```typescript
export type ButtonProps = {
  title: string;
};

export const DSText = ({ title }: ButtonProps) => {
  return <Text>{title}</Text>;
};

Obs.: Utilizar para construção componentes provindo do native-base ou react-native.

Criar também se preciso um arquivo `styles.tsx`, utilizando nele StyleSheet do react-native, objeto com estilização dos componentes ou styled-components.
```

---

# Exportando Componente

Dentro do arquivo `src/components/index.ts`, adicione uma linha exportando tudo da pasta do seu componente.

```typescript
export * from "./my-component";
```

---

# Exemplo: Utilizando Componente

```typescript
import { DSText } from "@mobk/engine";

const ExampleScreen = () => {
  return <DSText title="Confirmar" />;
};
```