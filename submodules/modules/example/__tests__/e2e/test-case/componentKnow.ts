import { by, element, expect } from 'detox';

const componentKnow = () => {
  it(`find X`, async () => {
    await expect(element(by.id('x'))).toBeVisible();
  });

  it(`Find PDF Generate Button`, async () => {
    await expect(element(by.id('button-generate-pdf'))).toBeVisible();
  });
  it(`Find Image to generate PDF`, async () => {
    await expect(element(by.id('img-generate-pdf'))).toBeVisible();
  });

  it(`Find Generate Share Button`, async () => {
    await expect(element(by.id('button-generate-share'))).toBeVisible();
  });

  it(`Find Image to generate Share`, async () => {
    await expect(element(by.id('img-generate-share'))).toBeVisible();
  });

  it(`Find Y`, async () => {
    await expect(element(by.id('y'))).toBeVisible();
  });

  it(`Click on the PDF`, async () => {
    await element(by.id('button-generate-pdf')).longPress(0);
  });
};

export default componentKnow;
