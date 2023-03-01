- [Regras](#regras)
- [Interface: `IDate`](#interface-idate)
- [Interface: `IDateParts`](#interface-idateparts)
- [Método: `now`](#método-now)
- [Método: `mount`](#método-mount)
- [Método: `split`](#método-split)
- [Método: `diff`](#método-diff)
- [Método: `add`](#método-add)
- [Método: `sub`](#método-sub)
- [Método: `toFormat`](#método-toformat)
- [Método: `toBRFormat`](#método-tobrformat)

# Regras

- Utiliza `date-fns` por trás dos panos para a manipulação

- Considera sempre Timezone AINA `America/Sao_Paulo`

---

# Interface: `IDate`

```typescript
{
  date: {
    obj: 2020-09-05T03:00:00.000Z,
    full: '2020-09-05',
    year: '2020',
    month: '09',
    monthNum: 8,
    day: '05'
  },
  time: {
    full: '10:30:00',
    hour: '10',
    minutes: '30',
    seconds: '00'
  }
}
```

Objeto de data customizado para o projeto, trazendo datas e horários completos, além de já trazê-los separadamente. Também inclui um objeto `Date` nativo para manipulação.

---

# Interface: `IDateParts`

```typescript
{
  year: '2020',
  month: '09',
  day: '05'
}
```

Datas separadas em dia, mês e ano.

---

# Método: `now`

```typescript
const result = date.now();
console.log(result); // IDate
```

<!-- omit in toc -->
#### Parâmetros

N/A

<!-- omit in toc -->
#### Detalhes

Retorna um `IDate` da data e hora atual, conforme o Timezone fixado.

---

# Método: `mount`

```typescript
const result = date.mount('2020-01-01');
console.log(result); // IDate
```

<!-- omit in toc -->
#### Parâmetros

`date`: **string** | **Date** - Data para converter para `IDate`

<!-- omit in toc -->
#### Detalhes

Retorna um `IDate` da data passada. É compatível com `yyyy-MM-ddd`, `dd/MM/yyyy`, e objeto `Date` nativo.

---

# Método: `split`

```typescript
const result = date.split('2020-01-01');
console.log(result); // IDateParts
```

<!-- omit in toc -->
#### Parâmetros

`date`: **string** - Data para converter para `IDateParts`

<!-- omit in toc -->
#### Detalhes

Retorna um `IDateParts` da data passada. É compatível com `yyyy-MM-ddd`, `dd/MM/yyyy`, e objeto `Date` nativo.

---

# Método: `diff`

```typescript
const result = date.diff('2020-01-01', '2020-01-02');
console.log(result); // IDateParts { day: '1', ... }
```

<!-- omit in toc -->
#### Parâmetros

`dateInit`: **string** - Menor data para comparar

`dateEnd`: **string** - Maior data para comparar

<!-- omit in toc -->
#### Detalhes

Retorna um `IDateParts` do comparativo entre as duas datas, indicando a diferença de anos, meses e dias entre elas. É compatível com `yyyy-MM-ddd`, `dd/MM/yyyy`, e objeto `Date` nativo.

---

# Método: `add`

```typescript
const result = date.add('2020-01-01', { day: '2', month: '1', year: '3' });
console.log(result); // IDate
```

<!-- omit in toc -->
#### Parâmetros

`date`: **IDate** - Data base para a soma

`toAdd`: **IDateParts** - Campos para somar (dia, mês e ano)

<!-- omit in toc -->
#### Detalhes

Retorna um `IDate` com a data somada. O campo `toAdd` pode ser passado livremente, visto que não precisa passar os três campos obrigatoriamente.

---

# Método: `sub`

```typescript
const result = date.sub('2020-01-01', { day: '2', month: '1', year: '3' });
console.log(result); // IDate
```

<!-- omit in toc -->
#### Parâmetros

`date`: **IDate** - Data base para a subtração

`toSub`: **IDateParts** - Campos para subtrair (dia, mês e ano)

<!-- omit in toc -->
#### Detalhes

Retorna um `IDate` com a data subtraída. O campo `toSub` pode ser passado livremente, visto que não precisa passar os três campos obrigatoriamente.

---

# Método: `toFormat`

```typescript
const result = date.sub('2020-01-01', 'EE');
console.log(result); // 'segunda'
```

<!-- omit in toc -->
#### Parâmetros

`date`: **string** - Data para formatação (algo como `IDate >> date >> full`)

`dateFormat`: **string** - Formato do retorno

<!-- omit in toc -->
#### Detalhes

Retorna uma `string` com a data formatada. Os formatos disponíveis para o campo `dateFormat` são do [Unicode](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). Os especificamente compatíveis com `date-fns` podem ser consultados [nesta lista](https://date-fns.org/v2.29.3/docs/format).

---

# Método: `toBRFormat`

```typescript
const result = date.toBRFormat('2020-01-01');
console.log(result); // '01/01/2020'
```

<!-- omit in toc -->
#### Parâmetros

`date`: **string** - Data para formatação (algo como `IDate >> date >> full`)

<!-- omit in toc -->
#### Detalhes

Retorna uma `string` com a data no formato `dd/MM/yyyy`, o padrão adotado pelo Brasil.