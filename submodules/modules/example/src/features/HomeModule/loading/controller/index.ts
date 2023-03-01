import { useAppNavigation, useAuthStore } from '@mobk/engine';
import { useEffect } from 'react';
import type { IBalanceResponse } from '../../../../services/domain/current-account/balance';
import { useBalance } from '../../../../services/use-cases/current-account/balance';

export const useController = (): void => {
  const navigation = useAppNavigation();

  const { accessToken } = useAuthStore().session;

  const goHome = (data: IBalanceResponse) => {
    navigation.navigate('Example', {
      screen: 'HomeModule',
      params: { screen: 'Home', params: { balance: data.data.balanceToday } },
    });
  };

  const { mutate } = useBalance({
    onError: console.log,
    onSuccess: goHome,
  });

  useEffect(() => {
    const startApp = async () => {
      // chamadas, estados e outras coisas a serem carregadas no inicio do modulo
      await new Promise<void>(resolve => setTimeout(() => resolve(), 2000));

      mutate({
        additionalHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
        urlParams: 'searches',
      });
    };
    startApp();
  }, []);
};
