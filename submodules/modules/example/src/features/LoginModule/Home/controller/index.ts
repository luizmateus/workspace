import { useAppNavigation } from '@mobk/engine';

export const useHomeController = () => {
  const navigation = useAppNavigation();

  const navigationToCpfScreen = () => {
    navigation.navigate('Example', {
      screen: 'LoginModule',
      params: { screen: 'Cpf' },
    });
  };

  return {
    navigationToCpfScreen,
  };
};
