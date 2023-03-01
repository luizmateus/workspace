import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Detox, HomeModule, LoginModule } from '../features';

export const ExampleStack = createNativeStackNavigator();

export const ExampleNavigator: React.FC = () => {
  return (
    <ExampleStack.Navigator
      initialRouteName="LoginModule"
      screenOptions={{
        headerShown: false,
        presentation: Platform.select({ ios: undefined, android: 'transparentModal' }),
      }}
    >
      <ExampleStack.Screen name="Home" component={Home} />
      <ExampleStack.Screen name="Detox" component={Detox} />
      <ExampleStack.Screen name="HomeModule" component={HomeModule} />
      <ExampleStack.Screen name="LoginModule" component={LoginModule} />
    </ExampleStack.Navigator>
  );
};
