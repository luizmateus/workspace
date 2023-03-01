import type { EHttpMethod } from './http';
import type { UseMutationOptions, UseQueryOptions } from 'react-query';

export type TRequestOptions = {
  method?: EHttpMethod;
  url: string;
  headers?: any;
  params?: any;
  body?: any;
};

export interface ISendMutateData<TBody = any> {
  additionalHeaders?: any;
  urlParams?: any;
  body?: TBody;
}

export interface IUseQueryUrl {
  url: string;
  method?: EHttpMethod;
  params?: any;
}

export type TUseQueryOptions<TKeys, TReturnData> = UseQueryOptions<TReturnData, Error, TReturnData, Array<TKeys>>;

export type TUseMutationOptions<TKeys, TReturnData, TSendData> = UseMutationOptions<TReturnData, Error, ISendMutateData<TSendData>, TKeys>;
