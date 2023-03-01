# Como Funciona?

O tema desenvolvido no Design System é um conjunto de Design Tokens que devem ser padronizados e utilizados ao longo da aplicação. Esses Design Tokens incluem, dentre outros itens, cores, tamanhos e fontes.

O ideal é que todo componente ou tela desenvolvida tenha acesso ao objeto de tema e os tipos de cada sub-objeto dentro dele.

---

# Design Tokens

Deve ser definido pela equipe de UX do projeto. Dentro do Design System, é implementado em um sistema de chave X valor.

```typescript
export default {
  '$chave-do-design-token-1': 'valor-1',
  '$chave-do-design-token-2': 'valor-2',
};
```

---

# Objeto de Tema

Dentro do arquivo `src/theme/index.ts`, deve ser exportado um objeto `theme` que utiliza o `extendTheme` do Native Base para implementação.

```typescript
import designTokens from '../designTokens';
import { extendTheme } from 'native-base';

export const theme = extendTheme({
  chaves: {
    valor1: designTokens['$chave-do-design-token-1'],
    valor2: designTokens['$chave-do-design-token-2'],
  }
});
```

---

# Tipagem de Tema

Dentro do arquivo `src/theme/index.ts`, deve ser exportado um objeto `theme` que utiliza o `extendTheme` do Native Base para implementação.

```typescript
import designTokens from '../designTokens';
import { extendTheme } from 'native-base';

export const theme = extendTheme({
  chaves: {
    valor1: designTokens['$chave-do-design-token-1'],
    valor2: designTokens['$chave-do-design-token-2'],
  }
});
```
