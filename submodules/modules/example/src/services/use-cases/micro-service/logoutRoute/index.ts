import { morphism } from 'morphism';
import { logoutRouteUrl } from '../../../domain/micro-service/logoutRoute/url';
import { useMicroService } from '../../../infra/micro-service/index';
import { logoutRouteSchema } from '../../../domain/micro-service/logoutRoute/schema';
import type { ILogoutRouteResponse } from '../../../domain/micro-service/logoutRoute/interfaces';
import type { TUseQueryOptions } from '@mobk/engine';
import type { TKeysMicroService } from '../../../infra/micro-service/types';

export const useLogoutRoute = async (options: TUseQueryOptions<TKeysMicroService, ILogoutRouteResponse>) => {
  const query = useMicroService<ILogoutRouteResponse>('MS_LOGOUT_ROUTE', { url: logoutRouteUrl }, options);

  const dataMapped = morphism(logoutRouteSchema, query.data || ({} as ILogoutRouteResponse));

  return {
    ...query,
    dataMapped,
  };
};
