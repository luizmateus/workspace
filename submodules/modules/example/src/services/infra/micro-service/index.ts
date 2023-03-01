import { IUseQueryUrl, TUseMutationOptions, TUseQueryOptions, useMutation, useQuery } from '@mobk/engine';

import type { TKeysMicroService } from './types';

export const useMicroService = <TReturnData = any>(
  useCaseKey: TKeysMicroService,
  useCaseUrl: IUseQueryUrl,
  useCaseOptions?: TUseQueryOptions<TKeysMicroService, TReturnData>,
  useCaseHeaders?: { [key: string]: any },
) => {
  return useQuery<TKeysMicroService, TReturnData>(
    {
      url: `micro-service/${useCaseUrl.url}`,
      method: useCaseUrl.method,
      params: useCaseUrl.params,
      headers: useCaseHeaders,
    },
    [useCaseKey],
    useCaseOptions,
  );
};

export const useMicroServiceMutation = <TReturnData = any, TSendData = any>(
  useCaseKey: TKeysMicroService,
  useCaseUrl: IUseQueryUrl,
  useCaseOptions?: TUseMutationOptions<TKeysMicroService, TReturnData, TSendData>,
  useCaseHeaders?: { [key: string]: any },
) => {
  return useMutation<TKeysMicroService, TReturnData, TSendData>(
    {
      url: `micro-service/${useCaseUrl.url}`,
      method: useCaseUrl.method,
      headers: useCaseHeaders,
    },
    useCaseKey,
    useCaseOptions,
  );
};
