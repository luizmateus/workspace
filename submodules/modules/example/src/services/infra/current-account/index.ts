import { IUseQueryUrl, TUseMutationOptions, useMutation } from '@mobk/engine';
import type { TKeysCurrentAccount } from './types';

export const useCurrentAccountMutation = <TReturnData = any, TSendData = any>(
  useCaseKey: TKeysCurrentAccount,
  useCaseUrl: IUseQueryUrl,
  useCaseOptions?: TUseMutationOptions<TKeysCurrentAccount, TReturnData, TSendData>,
) => {
  return useMutation<TKeysCurrentAccount, TReturnData, TSendData>(
    {
      url: `current-account/v1/${useCaseUrl.url}`,
      method: useCaseUrl.method,
    },
    useCaseKey,
    useCaseOptions,
  );
};
