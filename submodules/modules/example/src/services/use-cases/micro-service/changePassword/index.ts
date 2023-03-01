import { changePasswordRouteUrl } from '../../../domain/micro-service/changePassword/url';
import { useMicroServiceMutation } from '../../../infra/micro-service';

import type { IChangePasswordRouteBody, IChangePasswordRouteResponse } from '../../../domain/micro-service/changePassword/interfaces';
import type { TKeysMicroService } from '../../../infra/micro-service/types';
import type { TUseMutationOptions } from '@mobk/engine';

export const useChangePasswordRoute = async (
  options: TUseMutationOptions<TKeysMicroService, IChangePasswordRouteResponse, IChangePasswordRouteBody>,
) => {
  const query = useMicroServiceMutation<IChangePasswordRouteResponse, IChangePasswordRouteBody>(
    'MS_CHANGE_PASSWORD_ROUTE',
    { url: changePasswordRouteUrl },
    options,
  );

  return query;
};
