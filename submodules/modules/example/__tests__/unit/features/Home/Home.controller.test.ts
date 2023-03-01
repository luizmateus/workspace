import '@testing-library/jest-native/extend-expect';
import * as engine from '@mobk/engine';
import { renderHook /* , act */ } from '@testing-library/react-hooks';

import { useController } from '../../../../src/features/Home/controller';

describe('Home >> controller', () => {
  const { result } = renderHook(() => useController());
  console.log(result);

  it('call functions', async () => {
    // Arrange
    const expectResult = 'R$ 1,00';
    const spyChangeValue = jest.spyOn(engine.currency, 'toCurrency');
    spyChangeValue.mockReturnValue(expectResult);

    // Action
    // await act(async () => result.current.changeValue());

    // Assert
    expect(spyChangeValue).toBeCalledTimes(1);
  });
});
