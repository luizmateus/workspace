import { useAppNavigation, cpf as cpfMask } from '@mobk/engine';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

interface IController {
  navigationToPasswordScreen(): void;
  cpf: string;
  setCpf(data: string): void;
  goBack: () => void;
}

export const useCpfController = (): IController => {
  const navigation = useAppNavigation();
  const [cpf, setCpf] = useState(cpfMask.formatWithUnderscore(''));

  const navigationToPasswordScreen = () => {
    if (!cpfMask.validate(cpf)) {
      return Alert.alert('Digite um cpf valido');
    }

    navigation.navigate('Example', {
      screen: 'LoginModule',
      params: {
        screen: 'Password',
      },
    });
  };

  const maskCpf = useCallback((data: string) => {
    const formatted = cpfMask.formatWithUnderscore(data);
    setCpf(formatted);
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return {
    navigationToPasswordScreen,
    cpf,
    setCpf: maskCpf,
    goBack,
  };
};
