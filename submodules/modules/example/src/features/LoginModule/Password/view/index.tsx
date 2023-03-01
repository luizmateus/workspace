import React from 'react';
import { DSPasswordInput, DSButton, DSMainHeader } from '@mobk/engine';
import { Container, SafeAreaView, DSInputView } from './styles';
import { usePasswordController } from '../controller';

export const Password: React.FC = () => {
  const { isloadingLogin, isloadingValidateLoading, login, password, setPassword, goBack } = usePasswordController();
  const isLoading = isloadingLogin || isloadingValidateLoading;

  return (
    <SafeAreaView>
      <Container>
        <DSMainHeader onPress={goBack} />
        <DSInputView>
          <DSPasswordInput value={password} setValue={setPassword} testID="login-input-password" />
        </DSInputView>
        <DSButton
          title={isLoading ? 'Entrando' : 'Entrar'}
          primary
          fontSize="sm"
          onPress={login}
          disabled={password.length < 6 || isLoading}
          testID="login-btn-in"
        />
      </Container>
    </SafeAreaView>
  );
};
