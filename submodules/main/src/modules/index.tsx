import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import ModuleRegistry from './ModuleRegistry';
import ModuleDeployment from './ModuleDeployment';
import { Stack } from '../navigator';
import { AppNavigationType, useAppStore } from '@mobk/engine';

export const Modules = () => {
  const { setPostLogin } = useAppStore();

  useEffect(() => {
    SplashScreen.hide();

    const moduleDeployment = String(ModuleDeployment);
    setPostLogin(moduleDeployment);
  }, []);

  return (
    <>
      {ModuleRegistry().map(mod => {
        return <Stack.Screen key={mod.route} name={mod.route as keyof AppNavigationType} component={mod.component} />;
      })}
    </>
  );
};
