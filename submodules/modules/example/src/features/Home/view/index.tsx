import React from 'react';
import { AppPage } from '@mobk/engine';
import { useController } from '../controller';
import { ModuleComponent } from '../../../components';

export const Home: React.FC = () => {
  useController();

  // useEffect(() => {
  //   if (customerId) {
  //     return goHome();
  //   }

  //   goToLogin();
  // }, [customerId, goHome, goToLogin]);

  return (
    <AppPage>
      <ModuleComponent text="Example >> Home" />
    </AppPage>
  );
};
