import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Cpf } from './CPF';
import { Password } from './Password';

const LoginModuleStack = createNativeStackNavigator();

export const LoginModule: React.FC = () => {
  return (
    <LoginModuleStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        presentation: Platform.select({ ios: undefined, android: 'transparentModal' }),
      }}
    >
      <LoginModuleStack.Screen name="Home" component={Home} />
      <LoginModuleStack.Screen name="Cpf" component={Cpf} />
      <LoginModuleStack.Screen name="Password" component={Password} />
    </LoginModuleStack.Navigator>
  );
};
