import { axiosClient } from './client/axios';
import type { IHttpRequest, IHttpResponse } from '../types/interfaces/http';

export const api = <TReturnDataType = any>(data: IHttpRequest): Promise<IHttpResponse> => {
  return axiosClient<TReturnDataType>(data);
};
