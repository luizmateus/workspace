import { by, element, expect } from 'detox';

const redirectHomePdf = () => {
  it(`Close Alert PDF`, async () => {
    let action = 'OK';
    await expect(element(by.text(action))).toBeVisible();
    await element(by.text(action)).longPress(0); //fechar alerta que esta aberto apartir de do texto na tela
  });

  it(`Go Home`, async () => {
    await element(by.id('button-home')).longPress(0);
  });
};
export default redirectHomePdf;
