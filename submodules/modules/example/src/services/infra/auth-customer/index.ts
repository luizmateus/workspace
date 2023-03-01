import { IUseQueryUrl, TUseMutationOptions, useMutation } from '@mobk/engine';
import type { TKeysAuthCustomer } from './types';

export const useAuthCustomerMutation = <TReturnData = any, TSendData = any>(
  useCaseKey: TKeysAuthCustomer,
  useCaseUrl: IUseQueryUrl,
  useCaseOptions?: TUseMutationOptions<TKeysAuthCustomer, TReturnData, TSendData>,
  useCaseHeaders?: { [key: string]: any },
) => {
  return useMutation<TKeysAuthCustomer, TReturnData, TSendData>(
    {
      url: `auth-customer-pf/v1/${useCaseUrl.url}`,
      method: useCaseUrl.method,
      headers: useCaseHeaders,
    },
    useCaseKey,
    useCaseOptions,
  );
};
