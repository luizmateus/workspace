import { useMutation as useReactQueryMutation, UseMutationOptions, UseMutationResult } from 'react-query';
import { queryClient } from '../../contexts/query/queryClient';
import { api } from '../../api';
import { EHttpMethod, ISendMutateData, TRequestOptions } from '../../types';

export const useMutation = <TKeys extends string, TReturnData = any, TSendData = any>(
  requestDataOptions: TRequestOptions,
  requestKeys: TKeys,
  apiManagementOptions?: UseMutationOptions<TReturnData, Error, ISendMutateData<TSendData>, TKeys>,
): UseMutationResult<TReturnData, Error, ISendMutateData<TSendData>, TKeys> => {
  const { url, method = EHttpMethod.POST, headers } = requestDataOptions;
  return useReactQueryMutation(
    async ({ body, urlParams, additionalHeaders }: ISendMutateData<TSendData>) => {
      const fullURL = urlParams ? `${url}/${urlParams}` : `${url}`;

      const response = await api<TReturnData>({
        method,
        url: fullURL,
        body,
        headers: {
          ...headers,
          ...additionalHeaders,
        },
      });

      return response.body;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(requestKeys),
      ...apiManagementOptions,
    },
  );
};
