import { useAppNavigation } from '@mobk/engine';
import { useEffect } from 'react';

export const useController = (): void => {
  const navigation = useAppNavigation();

  useEffect(() => {
    const startApp = async () => {
      console.log(1);
      // chamadas, estados e outras coisas a serem carregadas no inicio do modulo
      await new Promise<void>(resolve => setTimeout(() => resolve(), 2000));
      console.log(2);

      navigation.navigate('Example', {
        screen: 'HomeModule',
        params: { screen: 'FirstPage' },
      });
    };
    startApp();
  }, []);
};
