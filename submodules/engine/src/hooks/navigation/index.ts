import type { NavigatorScreenParams } from '@react-navigation/native';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppNavigationType = {
  Example: NavigatorScreenParams<any>;
  Login: NavigatorScreenParams<any>;
  Home: NavigatorScreenParams<any>;
  AccountBalance: NavigatorScreenParams<any>;
  Cards: NavigatorScreenParams<any>;
  Pix: NavigatorScreenParams<any>;
};

export const useAppNavigation = () => useNavigation<NativeStackNavigationProp<AppNavigationType>>();

export const useAppRoute = () => useRoute<any>();
