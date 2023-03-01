import { EHttpMethod, TUseMutationOptions } from '@mobk/engine';
import type { TKeysAuthCustomer } from '../../../infra/auth-customer/types';
import { useAuthCustomerMutation } from '../../../infra/auth-customer';
import { accessTokenUrl, IAccessTokenBody, IAccessTokenResponse } from '../../../domain/auth-customer/access-token';

const Authorization = 'Basic MDE0ZTA2YWUtZTk0Mi0zODI2LTkzYjAtYjVjN2JiYWI0YzhlOjA3NmUzNWYxLWI1NTQtM2ViYi04ZTRkLTM0OTAxMTY0Njg3Mg==';

export const useAccessToken = (options?: TUseMutationOptions<TKeysAuthCustomer, IAccessTokenResponse, IAccessTokenBody>) => {
  const query = useAuthCustomerMutation<IAccessTokenResponse, IAccessTokenBody>(
    'AC_ACCESS_TOKEN',
    { url: accessTokenUrl, method: EHttpMethod.POST },
    options,
    { Authorization },
  );

  return query;
};
