import { EHttpMethod, TUseMutationOptions } from '@mobk/engine';
import type { TKeysCurrentAccount } from '../../../infra/current-account/types';
import { useCurrentAccountMutation } from '../../../infra/current-account';
import { balanceUrl, IBalanceBody, IBalanceResponse } from '../../../domain/current-account/balance';

export const useBalance = (options?: TUseMutationOptions<TKeysCurrentAccount, IBalanceResponse, IBalanceBody>) => {
  const query = useCurrentAccountMutation<IBalanceResponse, IBalanceBody>(
    'CURRENT_ACCOUNT',
    { url: balanceUrl, method: EHttpMethod.POST },
    options,
  );

  return query;
};
