# Testes Unitários (Unit)

# Como Funciona?

O Jest irá rodar os testes do seu projeto,
ele irá simular a utilização das funções que tenham regra de negócio

Iremos utilizar renderHook para renderizarmos nossos hooks para efeito de teste

Comandos disponíveis:

- [Exec](#desenvolvimento)
      - [`yarn unit:test` - Executa todos teste do projeto](#jest-run)
      - [`yarn unit:test caminho do arquivo` - Executa apenas o teste do arquivo em específico`](#jest-run) 

# Criando Teste Unitário

Iremos utilizar o Login como exemplo de criação do teste unitário

- Crie um arquivo dentro do caminho `__tests__/unit/features/LoginModule` chamado `LoginModule.Home.controller.test.ts` deixando-o desse jeito

```typescript
import "@testing-library/jest-native/extend-expect";
import { renderHook } from "@testing-library/react-hooks";
import { useController } from "../../../../src/features/LoginModule/Home/controller";

describe("Home >> controller", () => {});
```

- Dentro de `__tests__/mocks/features/LoginModule` crie o arquivo `index.ts`.
  Aqui nós exportaremos os mocks necessários para que nosso teste seja executado com sucesso

Digamos que `src/features/LoginModule/Home/controller` tenha essa implementação

```typescript
import { useLogin } from "../../../../services/use-cases/auth-customer/login";

interface IController {
  isloadingLogin: boolean;
  loginMutate: (data: Object) => void;
}

export const useController = (): IController => {
  const loginStatus = () => {
    return data.ok ? true : false;
  };

  const { mutate: loginMutate, isLoading: isloadingLogin, data } = useLogin();
};
```

- O nosso useLogin está sendo importado, por isso se torna uma dependência externa, o que nos faz ter que mockar seu valor de retorno. Neste exemplo, a unica função que nos interessa testar sua implementação é a função loginStatus, pois ela nos diz se o login foi feito com sucesso ou não.
  Vamos mockar o valor de retorno da nossa query useLogin no arquivo `index.ts` de mocks em `__tests__/mocks/features/LoginModule`

```typescript
export const dataLoginSuccessMock: Object = {
  ok: true,
};

export const dataLoginErrorMock: Object = {
  ok: false,
};
```

Neste exemplo criamos 2 objetos, um que simula o retorno do data do useLogin quando for success e outro quando for erro, desta forma pordemos importa-los dentro do nosso arquivo de teste dessa forma

```typescript
import {dataLoginSuccessMock, dataLoginErrorMock} from `../../../mocks/features/LoginModule`...
```

Com nossos valores de retorno importados, podemos agora mockar o retorno da chamada do useLogin, ficando dessa forma:

```typescript
import '@testing-library/jest-native/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { useController } from '../../../../src/features/LoginModule/Home/controller';
import {dataLoginSuccessMock, dataLoginErrorMock} from `../../../mocks/features/LoginModule`...
import * as LoginService from '../../../../src/services/use-cases/auth-customer/login';

describe('Home >> controller', () => {
  const mockUseLoginResult = {
    mutate: jest.fn()
    isLoading: true,
    data: dataLoginSuccessMock as any
  };
  const spyUseLogin = jest.spyOn(LoginService, 'useLogin');

  it('loginStatus success', async () => {
    spyUseLogin.mockReturnValue(mockUseLoginResult);
  })

});
```

Desta forma, estamos retornando o valor que queremos quando o método useLogin for chamado, agora que mockamos os valores das dependências da nossa controller, podemos de fato executar o teste que precisamos

```typescript
import '@testing-library/jest-native/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { useController } from '../../../../src/features/LoginModule/Home/controller';
import {dataLoginSuccessMock, dataLoginErrorMock} from `../../../mocks/features/LoginModule`...
import * as LoginService from '../../../../src/services/use-cases/auth-customer/login';

describe('Home >> controller', () => {
  const mockUseLoginResult = {
    mutate: jest.fn()
    isLoading: true,
    data: dataLoginSuccessMock as any
  };
  const spyUseLogin = jest.spyOn(LoginService, 'useLogin');

  it('loginStatus success', async () => {
    spyUseLogin.mockReturnValue(mockUseLoginResult);

    const { result } = renderHook(() => useController());

    const loginResult = result.current.loginStatus()

    const expectedResult = true

    expect(loginResult).beEqual((expectedResult);
  })

});
```

O nosso mockUseLoginResult é apenas um objeto que simula o retorno da nossa query, usando o data que fizemos no nosso arquivo de mocks. A propriedade mutate recebe um mock de chamada de função do jest, apenas para poder ser rastreado quando for chamado, não nos interessando sua implementação

Nossa const result contém a referência da chamada da useController, podendo acessar suas propriedades e estados, assim como seus métodos

Já o nosso expect apenas confere se o valor retornado pela função loginStatus está condizente com sua lógica implementada

```typescript
import '@testing-library/jest-native/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { useController } from '../../../../src/features/LoginModule/Home/controller';
import {dataLoginSuccessMock, dataLoginErrorMock} from `../../../mocks/features/LoginModule`...
import * as LoginService from '../../../../src/services/use-cases/auth-customer/login';

describe('Home >> controller', () => {
  const mockUseLoginResult = {
    mutate: jest.fn()
    isLoading: true,
    data: dataLoginSuccessMock as any
  };
  const spyUseLogin = jest.spyOn(LoginService, 'useLogin');

  it('loginStatus success', async () => {
    spyUseLogin.mockReturnValue(mockUseLoginResult);

    const { result } = renderHook(() => useController());

    const loginResult = result.current.loginStatus()

    const expectedResult = true

    expect(loginResult).beEqual((expectedResult);
  })

  it('loginStatus error', async () => {
    spyUseLogin.mockReturnValue({...mockUseLoginResult, data: dataLoginErrorMock as any});

    const { result } = renderHook(() => useController());

    const loginResult = result.current.loginStatus()

    const expectedResult = false

    expect(loginResult).beEqual((expectedResult);
  })
});
```

Pronto, agora nosso teste está completo, cobrindo os casos de sucesso e de falha, para executarmos nosso test, podemos usar o comando `yarn unit:test` o que fará com que todos os tests do nosso projeto sejam executados, se preferir podemos passar o caminho do arquivo como parametro `yarn unit:test caminho do arquivo` dessa forma, assim será executado somente o teste do arquivo em específico.

# Testes Automatizados (E2E)

# Como Funciona?

Detox irá rodar os testes baseado na versão compilada do seu projeto,
ele irá simular uma pessoa utilizando o aplicativo atraves de toques na tela

Comandos disponíveis:

- [Build](#desenvolvimento)
      - [`yarn e2e:build:android-debug` - Build android](#detox-build-android)
      - [`yarn e2e:build:ios-debug` - Build ios](#detox-build-ios)
- [Exec](#desenvolvimento)
      - [`yarn e2e:test:android-debug` - Build android](#detox-build-android)
      - [`yarn e2e:test:ios-debug` - Build ios](#detox-run-ios)
- [Comandos Adicionais](#comandos-adicionais)
      - [`yarn e2e:android:reverse` - (uso interno)](#yarn-devdeploy---deploy-de-módulo-uso-interno)

# Criando Teste e2e

Iremos utilizar a Home como exemplo de criação do teste detox

- Crie um Botão Dentro do arquivo `src/features/Home/view/index.tsx` com seu `testID`

Esse mesmo `testID` sera usado para manipular o botão no teste

```typescript
<DSButton
  testID="button-example"
  title="Go Detox"
  titleColor="primaryDark"
  fontSize="md"
  buttonBackground="primaryDarkest"
  onPress={() => {
    Alert.alert("Hello World");
  }}
/>
```

- Crie um arquivo chamado `button.ts` no caminho `__tests__/e2e/test-case/button.ts`

Com isso Você consegue reaproveitar o mesmo test-case que contenha a mesma funcionalidade mudando apenas o `testID` para ser usado em outras `features`

```typescript
import { by, element, expect } from "detox";

export type ButtonClickProps = {
  testID: string;
  description: string;
};

const ButtonClick = ({ testID, description }: ButtonClickProps) => {
  it(description, async () => {
    const switchElement = element(by.id(testID));
    await expect(switchElement).toBeVisible();
    await switchElement.longPress(0);
  });
};

export default ButtonClick;
```

- Crie sua feature, em `__tests__/e2e/features/Home/index.ts` importando seu test-case com o `testID`

```typescript
import ButtonClick from "../../test-case/buttonClick";
//import InputClick from "../../test-case/inputClick";

const Home = () => {
  ButtonClick({ testID: "button-example", description: `Button Click` });
  //InputClick();
};

export default Home;
```

import sua Feature Home em `__tests__/e2e/index.test.ts`

```typescript
import Home from "./features/Home";

describe("Home", Home);
```

após a realização dos procedimentos acima siga o proximo passo escolhendo em qual dispositivo ira rodar o teste

#### Android

Para gerar o build do seu projeto utilizando o detox utilize o comando abaixo

```
    yarn e2e:build:android-debug

```

Para executar o detox no do seu projeto utilizando o detox utilize o comando abaixo

```
     yarn e2e:test:android-debug

```

#### Ios

Para gerar o build do seu projeto utilizando o detox utilize o comando abaixo

```
    yarn e2e:build:ios-debug

```

Para executar o detox no do seu projeto utilizando o detox utilize o comando abaixo

```
     yarn e2e:test:ios-debug

```
