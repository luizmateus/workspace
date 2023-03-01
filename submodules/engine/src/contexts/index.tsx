import React, { PropsWithChildren } from 'react';
import { QueryProvider } from './query';
import { ThemeProvider } from './theme';

interface Props {
  contexts: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

const ComposeContexts = (props: Props) => {
  const { contexts = [], children } = props;

  return (
    <>
      {contexts.reduceRight((acc, Context) => {
        return <Context>{acc}</Context>;
      }, children)}
    </>
  );
};

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => (
  <ComposeContexts contexts={[ThemeProvider, QueryProvider]}>{children}</ComposeContexts>
);

export { QueryClient, QueryClientProvider } from 'react-query';
