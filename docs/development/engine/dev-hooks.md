# Como Funciona?

Os Hooks permitem que acessemos funcionalidades do React sem a necessidade de escrever classes, e são as raízes principais da construção de componentes funcionais. Saiba mais: [React Hooks](https://reactjs.org/docs/hooks-intro.html)

Dentro da Engine, podemos desenvolver Hooks customizados. Tais hooks podem ser criados por conta de uma necessidade de tipagem adicional, ou para executar uma rotina específica que utiliza outros hooks por trás dos panos.

---

# Criando Hook

Dentro da pasta `src/hooks`, crie uma sub-pasta com o nome do seu utilitário. Por exemplo: `src/hooks/my-hook`.

Dentro dessa pasta, crie um arquivo `index.ts`, com a configuração padrão abaixo:

```typescript
interface IMyHook {
  changeValue: () => void;
}

export const useMyHook = (): IMyHook => {
  const [value, setValue] = useState(false);

  const changeValue = () => setValue(!value);

  return { changeValue };
};
```

Com base no código acima, temos as seguintes vertentes:

- Criamos um arquivo em `src/hooks/my-hook/index.ts` que irá conter um exportável do hook;

- O hook é sempre prefixado com `use`, como no caso, `useMyHook`;

- Criamos uma variável de estado dentro deste hook, e uma função para alterá-lo;

- Exportamos as funções definidas no `IMyHook`;

- Agora, conseguiremos importar esse utilitário como `import { useMyHook } from '@mobk/engine'`.

Um ponto importante é que, diferente dos utilitários, exportamos diretamente o hook `useMyHook`. Ele pode ser utilizado somente dentro de componentes, ou dentro de outros hooks.

Outro ponto importante é que, dentro da pasta `src/hooks/my-hook`, você tem liberadade para criar outras sub-pastas, interfaces, e o que quer que seja necessário para a arquitetura do seu hook. O importante é que as regras de programação funcional sejam obedecidas.

---

# Exportando Hook

Dentro do arquivo `src/hooks/index.ts`, adicione uma linha exportando tudo da pasta do seu hook.

```typescript
export * from './my-hook';
```

---

# Exemplo: Uso na Prática

```typescript
import { useMyHook } from '@mobk/engine'

const Component = () => {
  const { changeValue } = useMyHook();

  ...
  ...
  ...
}
```
