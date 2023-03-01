import { by, element, expect } from 'detox';

export type WriteinInputProps = {
  testID: string;
  description: string;
  value: string;
};

const WriteinInput = ({ testID, description, value }: WriteinInputProps) => {
  it(description, async () => {
    const input = element(by.id(testID));
    await expect(input).toBeVisible();
    await input.replaceText(`${value}`); //abre o teclado e inserir texto
  });
};

export default WriteinInput;
