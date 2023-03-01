# Como Funciona?

O aplicativo precisa, indispensavelmente, se comunicar com uma API de Back-End para executar suas operações. Contudo, essa comunicação precisa ser padronizada, sem repetições de código, ou a possibilidade de áreas diferentes do aplicativo se comunicarem com o Back-End de formas muito diferentes.

Para isso, construímos uma arquitetura na Engine que seja escalável e reutilizável, abstraindo toda a comunicação que é feita com o Back-End.

---

# Arquitetura

![Alt text](../../img/arch-api-query.png 'Arquitetura')

A arquitetura da comunicação com o Back-End se baseia nas seguintes premissas:

- No `@mobk/engine`, é implementado o Axios para se comunicar diretamente com o Back-End;

- No `@mobk/engine`, é implementado o React Query para manipular as requests realizadas, utilizando o Axios configurado como cliente HTTP;

- No `@mobk/engine`, são exportados dois hooks para executar a comunicação, `useQuery` e `useMutation`;

- Nos repositórios de `@mobk/module-*`, utilizam os dois hooks para implementar as chamadas em si.

Com base nessas premissas, temos regra de que os endpoints consumidos sempre seguem o formato:

**https://`{base-url}`/`{micro-service}`/`{route}`**

- `base-url` é a URL do API Gateway (por exemplo: **api-gateway.com.br**);

- `micro-service` é o identificador do MicroService consumido (por exemplo: **cards-micro-service**);

- `route` é o identificador da rota para ser consumida (por exemplo: **v1/virtual-cards**);

No final, o exemplo acima ficaria:

**https://api-gateway.com.br/cards-micro-service/v1/virtual-cards**

---

# HTTP Client (Axios)

Toda comunicação precisa de um cliente HTTP para fazer a comunicação direta com o Back-End.

Para este projeto, foi escolhido o **Axios**.

---

# Interface da Aplicação (React Query)

Para que o aplicativo não chame diretamente o cliente HTTP, e para ter mais poder e manipulação em cima dos resultados, foi implementada uma interface de comunicação.

Essa interface é disponibilizada como dois hooks, `useQuery` e `useMutation`, que fazem a ponte entre as rotinas genéricas da Engine, e a implementação específica de cada módulo. Por trás dos panos, é utilizado o **React Query** para obter todas as funcionalidades necessárias.

Para cada request, uma **key** deve ser associada. Essa key é utilizada somente para identificar os valores armazenados pelo React Query em tempo de execução. São de preenchimento livre, mas de forma a manter um padrão, é recomendado que cada hook construa seu `type TKeys = string | string | ...`.

---

# Uso Básico: useQuery

O hook de `useQuery` deve ser utilizado para **consumo de APIs**, principalmente para métodos GET. Através dele, é possível constuir uma API pronta para se comunicar com determinado MicroService.

```typescript
/**
 * Definindo as keys de Request.
 * Deve ser uma lista de opções em `string`, sendo único para cada request
 */
type TKeys = 'CHAVE_PARA_IDENTIFICAR_REQUEST' | 'OUTRA_CHAVE';

/**
 * Definindo a interface da resposta do serviço.
 */
interface IResposta {
  id: number;
  name: string;
}

/**
 * Criando um hook com base no `useQuery`.
 * Parâmetros de type do `useQuery`:
 *   - Type das keys
 *   - Type com o interface
 * Parâmetro de função do `useQuery`:
 *   - Parâmetros da request (url, method, etc.)
 *   - Chave da request (array com um item só)
 *   - Opções adicionais...
 */
const useCardsMicroService = () => {
  return useQuery<TKeys, IResposta>(
    {
      url: 'cards-micro-service/v1/virtual-cards',
    },
    ['CHAVE_PARA_IDENTIFICAR_REQUEST']
  );
};

const query = useCardsMicroService();
```

---

# Uso Básico: useMutation

O hook de `useMutation` deve ser utilizado para **envio e mutação de dados**, principalmente para métodos POST, PUT, PATCH e DELETE.

```typescript
/**
 * Definindo a interface de envio (body) do serviço.
 */
interface IEnvioPost {
  id: number;
  name: string;
}

/**
 * Definindo a interface da resposta do serviço.
 */
interface IRespostaPost {
  id: number;
  name: string;
}

/**
 * Criando um hook com base no `useMutation`.
 * Parâmetros de type do `useMutation`
 *   - Type das keys
 *   - Type com o interface de resposta
 *   - Type com o interface de envio (body)
 * Parâmetro de função do `useMutation`:
 *   - Parâmetros da request (url, method, etc.)
 *   - Chave da request (string diretamente)
 *   - Opções adicionais...
 */
const useCardsMicroServiceMutation = (id: number) => {
  return useMutation<TKeys, IRespostaPost, IEnvioPost>(
    {
      url: `cards-micro-service/v1/virtual-cards/${id}`,
      method: EHttpMethod.PUT,
    },
    'OUTRA_REQUEST'
  );
};

const virtualCardId = 123;
const query = useCardsMicroServiceMutation(virtualCardId);
```

---

# Uso Avançado: Extensão

A forma mais avançada e correta de construir hooks de comunicação é utilizando a correta extensão. Ou seja, seguir as seguintes regras:

- Não chamar o **Axios** diretamente;

- Não chamar o **React Query** diretamente;

- Construir um hook extendido do `useQuery` por MicroService, chamado `use{MicroService}Query`;

- Construir um hook extendido do `useMutation` por MicroService, chamado `use{MicroService}Mutation`;

- Construir um hook extendido do `use{MicroService}Query` para cada rota de GET, chamado `use{Rota}`;

- Construir um hook extendido do `use{MicroService}Mutation` para cada rota de POST, PUT, PATCH e DELETE, chamado `use{Rota}`;

Ou seja, no exemplo acima, o correto seria:

- `useGetCards` --> Extendido `useCardsMSQuery` --> Extendido do `useQuery`

- `useGetVirtualCards` --> Extendido do `useCardsMSQuery` --> Extendido do `useQuery`

- `useChangeVirtualCards` --> Extendido do `useCardsMSMutation` --> Extendido do `useMutation`

# Uso Avançado: Exemplo

A melhor forma de criar essas extensões é criando, corretamente, **Types** e **Params** que são passados entre funções. No repositório `@mobk/module-example`, existe uma implementação de exemplo desse formato, utilizando as notações de Domain, Infra e UseCase de Clean Architecture para a estrutura de pastas.

A estrutura de pastas denomina:

- **Infra**: Deve ser configurado o hook de comunicação com o MicroService. A ideia é que seja uma configuração por MicroService, e não por rota. Aqui é onde ficaria o `useCardsMSQuery` e `useCardsMSMutation`.

- **Use-Cases**: Casos de uso da comunicação - ou seja, um hook para cada rota dentro do MicroService. Aqui é onde ficariam cada rota, como o `useGetCards`, `useGetVirtualCards` e `useChangeVirtualCards`.

- **Domain**: Domínios e descritivos dos casos de uso - ou seja, tipagem e configurações cada rota dentro do MicroService.
