import { SetStateAction, useState } from 'react';
import { useAppNavigation, useCrypto, uuid } from '@mobk/engine';
import type { IAccessTokenResponse } from '../../../../services/domain/auth-customer/access-token';

import { decodeJwt, saveSession } from '../../../../services/use-cases/auth-customer/save-user';
import { useAccessToken } from '../../../../services/use-cases/auth-customer/access-token';
import { useValidateGateway } from './../../../../services/use-cases/crypto/keys';
import { Alert } from 'react-native';

const body = {
  segment: 'P',
  documentNumber: '55155114845',
  channel: 'MB',
  password: 'uriSequence=EEBBEE;uriMatrix=A@95ZVEQ-B@13VUFK-C@84EMBJ-D@76SUBE-E@02WSKC-F@OMMMSF;',
  username: 'UHMOBKDU1',
};

interface IController {
  isloadingLogin: boolean;
  isloadingValidateLoading: boolean;
  login(): void;
  password: string;
  setPassword: React.Dispatch<SetStateAction<string>>;
  goBack: () => void;
}

export const usePasswordController = (): IController => {
  const navigation = useAppNavigation();
  const { encryptedAESKey, idEncrypted } = useCrypto();
  const [password, setPassword] = useState('');

  const throwError = ({ message }: Error) => {
    console.log('error');

    return Alert.alert(message);
  };

  const validategateway = async ({ access_token, jwt }: IAccessTokenResponse) => {
    console.log('validate gateway');

    await validadeGatewayMutate({
      body: { key: encryptedAESKey, id: idEncrypted },
      additionalHeaders: { Authorization: `Bearer ${access_token}` },
    });
    console.log('saving session');

    saveSession({ access_token: access_token, jwtDecoded: decodeJwt(jwt), loggedIn: true });
    console.log('go to homemodule');
    navigation.navigate('Example', {
      screen: 'HomeModule',
    });
  };

  const login = () => {
    console.log('start login');
    loginMutate({
      body,
      additionalHeaders: {
        'x-transaction-id': uuid.v4(),
      },
    });
  };

  const { mutate: loginMutate, isLoading: isloadingLogin } = useAccessToken({
    onSuccess: validategateway,
    onError: throwError,
  });

  const { mutateAsync: validadeGatewayMutate, isLoading: isloadingValidateLoading } = useValidateGateway({
    onError: throwError,
  });

  const goBack = () => {
    navigation.goBack();
  };

  return {
    login,
    isloadingLogin,
    isloadingValidateLoading,
    password,
    setPassword,
    goBack,
  };
};
