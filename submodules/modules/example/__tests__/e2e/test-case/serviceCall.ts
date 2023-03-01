import { by, element } from 'detox';

const serviceCall = () => {
  it(`Click Call service`, async () => {
    await element(by.id('call-service')).longPress(0);
  });
};

export default serviceCall;
