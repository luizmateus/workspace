Uma necessidade do projeto é o versionamento de componentes - ou seja, a possibilidade de ter múltiplas versões do Design System, ou de um componente específico.

Contudo, para levar em consideração a modalidade do projeto, o versionamento deversá ser feito através do próprio repositório de Design System, utilizando a criação de novos componentes, ou com a extensão de componentes já existentes.

Seguem abaixo as estratégias de versionamento:

# Criação de V2

Caso a equipe de Design System veja como necessário a criação de novas versões com "breaking changes" dos componentes já existentes, será necessário criar uma "V2" do componente em questão.

Após aprovação do uso, e preparação do mesmo para substituição no app de forma completa, o mesmo poderá ser migrado para a versão anterior do componente, sobrescrevendo seu uso original.

```typescript
export * from './Component';
export * from './ComponentV2';
export * from './ComponentV3';
```

# Extend de Componentes

Seguindo as regras funcionais, os componentes ficarão aberto para "Composition", que é uma visão similar à "extensão" dos componentes. Isso permite que os mesmos sejam customizados conforme a necessidade.

```typescript
const ComponentV2 = ({ children, ...props }) => {
  return <ComponentV1 {...props}>{children}</ComponentV1>;
};
```

---

#### Opção Descartada: Versionamento via `package.json`

A versão do Design System exposta para a aplicação será feita através da Engine, utilizando a versão do `package.json`. Todos os módulos deverão utilizar a mesma versão do pacote em si, para evitarmos duplicidade no tamanho do bundle da aplicação, assim como conflitos de desenvolvimento.

Por conta disso, não será possível realizar o versionamento de componentes específicos via `package.json`.
