import { useAppNavigation, useAuthStore } from '@mobk/engine';
import { useEffect } from 'react';

// interface IController {
//   goHome(): void;
//   goToLogin(): void;
//   customerId: string;
// }

export const useController = () => {
  // export const useController = (): IController => {
  const navigation = useAppNavigation();
  const { session } = useAuthStore.getState();

  const goHome = () => {
    navigation.navigate('Example', {
      screen: 'HomeModule',
    });
  };

  const goToLogin = () => {
    navigation.navigate('Example', {
      screen: 'LoginModule',
    });
  };

  useEffect(() => {
    if (session.customerId) {
      return goHome();
    }

    goToLogin();
  }, [session.customerId, goHome, goToLogin]);

  // return {
  //   goHome,
  //   customerId: session.customerId,
  //   goToLogin,
  // };
};
