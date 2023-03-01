import React from 'react';
import { DSButton, DSInput, DSMainHeader } from '@mobk/engine';
import { Container, DSInputView, SafeAreaView } from './styles';
import { useCpfController } from '../controller';

export const Cpf: React.FC = () => {
  const { navigationToPasswordScreen, cpf, setCpf, goBack } = useCpfController();

  return (
    <SafeAreaView>
      <Container>
        <DSMainHeader onPress={goBack} />
        <DSInputView>
          <DSInput
            onChangeText={setCpf}
            title="Digite seu CPF"
            placeholder="CPF"
            keyboardType="number-pad"
            value={cpf}
            testID="login-input-cpf"
          />
        </DSInputView>
        <DSButton
          testID="login-input-continued"
          title="Continuar"
          primary
          fontSize="sm"
          onPress={navigationToPasswordScreen}
          disabled={cpf.length < 11}
        />
      </Container>
    </SafeAreaView>
  );
};
