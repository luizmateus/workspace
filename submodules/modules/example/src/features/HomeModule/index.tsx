import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Loading } from './loading';

export type stackRouteNamesProps = {
  Home: { balance: number } | undefined;
  Loading: undefined;
};

const HomeModuleStack = createNativeStackNavigator<stackRouteNamesProps>();

export const HomeModule: React.FC = () => {
  return (
    <HomeModuleStack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false,
        presentation: Platform.select({ ios: undefined, android: 'transparentModal' }),
      }}
    >
      <HomeModuleStack.Screen name="Home" component={Home} />
      <HomeModuleStack.Screen name="Loading" component={Loading} />
    </HomeModuleStack.Navigator>
  );
};
