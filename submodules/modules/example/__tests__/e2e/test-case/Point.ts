import { by, element, expect } from 'detox';

const Point = () => {
  it(`Point Examples Detox`, async () => {
    const switchElement = element(by.id('detox-example'));
    await expect(switchElement).toBeVisible();
    await switchElement.longPress(0);
  });
};

export default Point;
