import { IUseQueryUrl, TUseMutationOptions, useMutation } from '@mobk/engine';
import type { TKeysCrypto } from './types';

export const useCryptoMutation = <TReturnData = any, TSendData = any>(
  useCaseKey: TKeysCrypto,
  useCaseUrl: IUseQueryUrl,
  useCaseOptions?: TUseMutationOptions<TKeysCrypto, TReturnData, TSendData>,
) => {
  return useMutation<TKeysCrypto, TReturnData, TSendData>(
    {
      url: `crypto/v1/${useCaseUrl.url}`,
      method: useCaseUrl.method,
    },
    useCaseKey,
    useCaseOptions,
  );
};
