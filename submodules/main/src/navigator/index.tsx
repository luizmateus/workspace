import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Modules } from '../modules';
import type { AppNavigationType } from '@mobk/engine';

export const Stack = createNativeStackNavigator<AppNavigationType>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {Modules()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
