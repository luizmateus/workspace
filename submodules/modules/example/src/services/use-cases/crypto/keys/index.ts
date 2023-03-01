import { EHttpMethod, TUseMutationOptions } from '@mobk/engine';
import type { TKeysCrypto } from '../../../infra/crypto/types';
import { useCryptoMutation } from '../../../infra/crypto';
import { IKeysBody, keysUrl } from '../../../domain/crypto/keys';

export const useValidateGateway = (options?: TUseMutationOptions<TKeysCrypto, void, IKeysBody>) => {
  const query = useCryptoMutation<void, IKeysBody>('CRYPTO', { url: keysUrl, method: EHttpMethod.POST }, options);

  return query;
};
