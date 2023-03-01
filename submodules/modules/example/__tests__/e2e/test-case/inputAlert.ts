import { by, device, element, expect } from 'detox';
const titleVisible = () => {
  it('Should have hello text', async () => {
    await expect(element(by.id('title'))).toBeVisible();
  });
};
const inputAlert = () => {
  titleVisible();

  const name = 'luan';
  const typedText = `Hello ${name}`;

  it(`filling entry with Hello Luan`, async () => {
    const input = element(by.id('my-input'));
    await input.replaceText(`${typedText}`); //abre o teclado e inserir texto
  });

  it(`Switch true`, async () => {
    const switchElement = element(by.id('my-switch'));
    await expect(switchElement).toBeVisible();

    await switchElement.longPress(0);

    if (device.getPlatform() === 'ios') {
      await expect(switchElement).toHaveValue('1');
    } else {
      await expect(switchElement).toHaveToggleValue(true);
    }
  });

  it(`Click alert`, async () => {
    await element(by.id('my-button')).longPress(0);
  });

  it(`View hello ${name} in Alert`, async () => {
    await expect(element(by.text(typedText)).atIndex(0)).toBeVisible();
  });

  it('There is an ok on the alert', async () => {
    let action = 'OK';

    await expect(element(by.text(action))).toBeVisible();
    await element(by.text(action)).longPress(0); //fechar alerta que esta aberto apartir de do texto na tela
  });

  titleVisible();
};

export default inputAlert;
