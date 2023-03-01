- [Regras](#regras)
- [Método: `toCurrency`](#método-tocurrency)
- [Método: `toNumber`](#método-tonumber)

# Regras

- Utiliza `currency.js` por trás dos panos para a manipulação

- Separador de decimal é `,`

- Separador de milhar é `.`

- Resultado para número positivo é `R$ {valor}`

- Resultado para número negativo é `-R$ {valor}`

- Resultado para valores inválidos é `R$ 0,00`

---

# Método: `toCurrency`

```typescript
const result = currency.toCurrency(123);
console.log(result); // 'R$ 1,23'
```

<!-- omit in toc -->
#### Parâmetros

`value`: **number** - Valor em formato numérico.

<!-- omit in toc -->
#### Detalhes

Fazer a conversão de um valor numérico para moeda formatada. Se o valor passado for inválido, retornará o valor padrão zerado.

---

# Método: `toNumber`

```typescript
const result = currency.toNumber('R$ 1,23');
console.log(result); // 1.23
```

<!-- omit in toc -->
#### Parâmetros

`value`: **string** - Valor em formato de moeda formatada.

<!-- omit in toc -->
#### Detalhes

Fazer a conversão de moeda formatada para valor numérico. Se o valor passado for inválido, retornará o valor padrão zerado.
