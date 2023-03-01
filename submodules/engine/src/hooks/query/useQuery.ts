import { useQuery as useReactQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { api } from '../../api';
import { EHttpMethod, TRequestOptions } from '../../types';

export const useQuery = <TKeys, TReturnData = any>(
  requestDataOptions: TRequestOptions,
  requestKeys: Array<TKeys>,
  apiManagementOptions?: UseQueryOptions<TReturnData, Error, TReturnData, Array<TKeys>>,
): UseQueryResult<TReturnData, Error> => {
  const { url, method = EHttpMethod.GET, headers, body } = requestDataOptions;
  return useReactQuery(
    requestKeys,
    async () => {
      const response = await api<TReturnData>({
        method,
        url,
        body,
        headers,
      });

      return response.body;
    },
    { ...apiManagementOptions },
  );
};
