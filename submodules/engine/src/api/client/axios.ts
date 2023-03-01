import axios, { AxiosResponse } from 'axios';
import Config from 'react-native-config';
import { cryptoModule } from '../../native-modules';
import { useAuthStore, useCrypto } from '../../store';
import type { IHttpRequest, IHttpResponse } from '../../types/interfaces/http';
import { uuid } from '../../utils/uuid';

const TIMEOUT = 10000;
const BASE_URL = String(Config.API_BASE_URL);

export const axiosClient = async <TReturnDataType = any>(data: IHttpRequest): Promise<IHttpResponse> => {
  let axiosResponse: AxiosResponse;

  try {
    axiosResponse = await axios.request<TReturnDataType>({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
      url: data.url,
      method: data.method,
      data: data.body,
      params: data.params,
      headers: {
        ...data.headers,
      },
    });
  } catch (error) {
    throw error;
  }

  return {
    statusCode: axiosResponse.status,
    body: axiosResponse.data,
  };
};

axios.interceptors.request.use(async request => {
  console.log('START Logging Request');

  const loggedIn = useAuthStore.getState().loggedIn;
  const newHeaders: any = {};

  newHeaders['x-transaction-id'] = uuid.v4();

  const { data, headers } = request;

  if (loggedIn) {
    console.log('Interceptor Request');
    const { key, idEncrypted } = useCrypto.getState();

    const encryptedPayload = await cryptoModule.symmetricEncrypt(data, key);
    const xTransactionInfo = await createTransactionInfo();

    newHeaders['original-key'] = idEncrypted;
    newHeaders['x-transaction-info'] = xTransactionInfo;

    Object.assign(request, {
      data: encryptedPayload,
    });

    console.log('Encrypt Body', request.data);
    console.log('New Headers', request.headers);
  }

  Object.assign(request, {
    headers: { ...newHeaders, ...headers },
  });
  // console.log('Method', config.method);
  // console.log('URL', config.url);
  // console.log('Headers', config.headers);
  // console.log('Params', config.params);
  // console.log('Data', config.data);
  console.log('END Logging Request');
  return request;
});

axios.interceptors.response.use(
  async response => {
    console.log('START Logging Response');

    const loggedIn = useAuthStore.getState().loggedIn;

    if (loggedIn) {
      console.log('Interceptor Response');
      const { key } = useCrypto.getState();
      const { data } = response;

      if (data) {
        const decryptPayload = await cryptoModule.symmetricDecrypt(data, key);

        Object.assign(response, {
          data: decryptPayload,
        });
      }
      console.log('Decrypt Body', response.data);
    }

    // console.log('Status', response.status);
    // console.log('Headers', response.headers);
    // console.log('Data', response.data);
    console.log('END Logging Response');
    return response;
  },
  error => {
    console.log('START Logging Error');
    console.log('Response', error.response);
    console.log('END Logging Error');
    return error;
  },
);

const createTransactionInfo = () => {};
