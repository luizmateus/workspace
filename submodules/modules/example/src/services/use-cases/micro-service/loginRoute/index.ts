import { morphism } from 'morphism';
import { loginRouteUrl } from '../../../domain/micro-service/loginRoute/url';
import { useMicroService } from '../../../infra/micro-service/index';
import { loginRouteSchema } from '../../../domain/micro-service/loginRoute/schema';
import type { ILoginRouteResponse } from '../../../domain/micro-service/loginRoute/interfaces';
import type { TUseQueryOptions } from '@mobk/engine';
import type { TKeysMicroService } from '../../../infra/micro-service/types';

export const useLoginRoute = async (options: TUseQueryOptions<TKeysMicroService, ILoginRouteResponse>) => {
  const query = useMicroService<ILoginRouteResponse>('MS_LOGIN_ROUTE', { url: loginRouteUrl }, options);

  const dataMapped = morphism(loginRouteSchema, query.data || ({} as ILoginRouteResponse));

  return {
    ...query,
    dataMapped,
  };
};
