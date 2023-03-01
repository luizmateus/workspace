import React from 'react';
import { welcomeBackground, DSButton } from '@mobk/engine';
import { MarginBottom12, Container, ImageBackground } from './styles';
import { useHomeController } from '../controller';

export const Home: React.FC = () => {
  const { navigationToCpfScreen } = useHomeController();

  return (
    <Container>
      <ImageBackground source={welcomeBackground}>
        <DSButton testID="i-have-an-account" onPress={navigationToCpfScreen} title="Já tenho conta" primary fontSize="md" />
        <MarginBottom12 />
        <DSButton onPress={() => {}} title="Abrir sua conta" secondary fontSize="md" />
        <MarginBottom12 />
      </ImageBackground>
    </Container>
  );
};
