# Testes Unitários (Unit)

Os testes unitários devem ser feitos para cada funcionalidade exportada da Engine (exceto Hooks e Native Modules).

Dentro da pasta `__tests__` do projeto, deve ser criado um arquivo de teste com o mesmo caminho relativo do que está sendo testado. Dentro desse arquivo, devem ser construídos casos de testes unitários para cobrir 100% (ou o melhor percentual possível).

Deve ser construído um `describe` por função exportada dentro de um arquivo, e um `test` para cada caso de teste dentro daquele `describe`.

```typescript
import { myUtil } from '../../src/utils/my-util';

describe('utils/my-util >> myFunction', () => {
  test('should return something', () => {
    const variable = myUtil.myFunction();
    expect(variable).toEqual('something');
  });
```

---

# Testes Automatizados (E2E)

A Engine não deve possuir testes automatizados desenvolvidos, visto que não existirão telas com regras de negócio implementadas nela. Os testes automatizados devem ser desenvolvidos por módulo.
