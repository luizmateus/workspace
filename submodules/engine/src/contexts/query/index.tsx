import React, { PropsWithChildren } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './queryClient';

export const QueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
