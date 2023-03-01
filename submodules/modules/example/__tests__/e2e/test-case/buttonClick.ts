import { by, element, expect } from 'detox';

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
