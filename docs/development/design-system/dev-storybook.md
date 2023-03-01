# Como Funciona?

O storybook tem o propósito de documentar e exemplificar o uso de um componente.

---

# Criando Story

Dentro da pasta `demo/components`, crie uma sub-pasta com o nome do seu componente. Por exemplo: `demo/components/nome-do-componente`.

Dentro dessa pasta, crie um arquivo `nome-do-componente-stories.tsx`, com a configuração padrão abaixo:

```typescript
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { View } from 'react-native';
import { Button } from '@mobk/design-system';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const ExampleButton: ComponentStory<typeof Button> = args => (
  <View>
    <Button {...args} />
  </View>
);

ExampleButton.args = {
  text: 'Original',
  color: '#00a857',
};
```

## Para saber como visualizar o componente rodando no storybook, veja seção do [how-to-test](./how-to-test.md).
