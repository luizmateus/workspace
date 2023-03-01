import React, { PropsWithChildren } from 'react';
import { theme, NativeBaseProvider } from '@mobk/design-system';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NativeBaseProvider config={{}} theme={theme}>
      {children}
    </NativeBaseProvider>
  );
};
