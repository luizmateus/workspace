# Como Funciona?

Um utilitário tem o propósito de agregar ferramentas e rotinas programáticas para serem reutilizáveis. Por exemplo, um cálculo que é utilizado em várias pontas da aplicação - ao invés de duplicar o código que faz esse cálculo, criamos um utilitário que se responsabiliza por fazê-lo, e é distribuído para todos os módulos através do `@mobk/engine`.

---

# Criando Utilitário

Dentro da pasta `src/utils`, crie uma sub-pasta com o nome do seu utilitário. Por exemplo: `src/utils/my-util`.

Dentro dessa pasta, crie um arquivo `index.ts`, com a configuração padrão abaixo:

```typescript
const myFunction = () => {
  console.log('called myFunction');
};

export const myUtil = {
  myFunction,
};
```

Com base no código acima, temos as seguintes vertentes:

- Criamos um arquivo em `src/utils/my-util/index.ts` que irá agregar as funções desse utilitário;

- Criamos uma função de exemplo dentro desse arquivo;

- Exportamos um objeto único desse utilitário, chamado `myUtil`, com a `myFunction` integrada dentro dele;

- Agora, conseguiremos importar esse utilitário como `import { myUtil } from '@mobk/engine'`.

Um ponto importante é que não exportamos diretamente a função `myFunction`, mas sim um objeto chamado `myUtil` que encapsula ela. Isso é feito como padrão de forma a evitarmos conflitos entre nomes de funções de outros utilitários, e para simplificar a importação no uso final.

Outro ponto importante é que, dentro da pasta `src/utils/my-util`, você tem liberadade para criar outras sub-pastas, interfaces, e o que quer que seja necessário para a arquitetura do seu utilitário. O importante é que as regras de programação funcional sejam obedecidas.

---

# Exportando Utilitário

Dentro do arquivo `src/utils/index.ts`, adicione uma linha exportando tudo da pasta do seu utilitário.

```typescript
export * from './my-util';
```

---

# Exemplo: Integrando com Libs

Dentro do seu utilitário, você pode integrar qualquer biblioteca que seja necessária.

```typescript
import decode from 'jwt-decode';

const decodeJwt = (jwt: string) => decode(jwt);

export const jwt = {
  decodeJwt,
};
```

---

# Exemplo: Uso na Prática

```typescript
import { myUtil } from '@mobk/engine'

myUtil.myFunction(); // console.log('called myFunction');
```
