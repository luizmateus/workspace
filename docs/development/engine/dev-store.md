# Como Funciona?

O store tem o propósito de fornecer um armazenamento de estado em tempo de execução, que pode ser consultado e manipulado ao longo da aplicação. Utiliza o Zustando como mecanismo.

---

# Criando Store

Dentro da pasta `src/store`, crie uma sub-pasta com o nome do seu utilitário. Por exemplo: `src/store/my-store`.

Dentro dessa pasta, crie um arquivo `index.ts`. Dentro dessa pasta, crie também uma sub-pasta chamada `interfaces`, com um arquivo chamado `index.ts`.

Desenvolva o código básico conforme abaixo:

#### src/store/my-store/index.ts

```typescript
import create from 'zustand';
import type { IMyStore } from './interfaces';

export const useMyStore = create<IMyStore>((set) => ({
  myValue: null,
  setMyValue: (value) =>
    set((_state) => ({
      myValue: value.key,
    })),
}));
```

#### src/store/my-store/interfaces/index.ts

```typescript
export interface IMyStoreValues {
  myValue: string | null;
}

export interface IMyStore extends IMyStoreValues {
  setMyValue: (value: IMyStoreValues) => void;
}
```

Com base no código acima, temos as seguintes vertentes:

- Criamos um arquivo em `src/store/my-store/index.ts` que irá agregar a definição deste store;

- Criamos um arquivo em `src/store/my-store/interfaces/index.ts` que irá agregar a tipagem deste store;

- Exportamos um objeto único desse store, chamado `useMyStore`, que pode ser utilizado como hook em componentes, ou como state fora de componentes;

- Agora, conseguiremos importar esse store como `import { useMyStore } from '@mobk/engine'`.

Outro ponto importante é que, dentro da pasta `src/utils/my-store`, você tem liberadade para criar outras sub-pastas, interfaces, e o que quer que seja necessário para a arquitetura do seu store. O importante é que as regras de programação funcional sejam obedecidas.

---

# Exportando Store

Dentro do arquivo `src/store/index.ts`, adicione uma linha exportando tudo da pasta do seu utilitário.

```typescript
export * from './my-store';
```

---

# Exemplo: Usando em Componentes

```typescript
import { useMyStore } from '@mobk/engine'

const Component = () => {
  const { setMyValue } = useMyStore();

  ...
  ...
  ...
}
```

---

# Exemplo: Usando Fora de Componentes

```typescript
import { useMyStore } from '@mobk/engine'

const myUtil = () => {
  const myStore = useMyStore.getState();

  ...
  ...
  ...
}
```
