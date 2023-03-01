import { by, element } from 'detox';

const Home = () => {
  it(`Home money back`, async () => {
    await waitFor(element(by.text('Dinheiro de volta')))
      .toBeVisible()
      .withTimeout(5000);
  });

  it(`Home balance available`, async () => {
    await waitFor(element(by.text('Saldo Disponivel')))
      .toBeVisible()
      .withTimeout(5000);
  });
};

export default Home;
