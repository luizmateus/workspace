import React from 'react';
import * as s from './styles';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

export const AppPage: React.FC<SafeAreaViewProps> = ({ children }) => {
  return <s.Container>{children}</s.Container>;
};
