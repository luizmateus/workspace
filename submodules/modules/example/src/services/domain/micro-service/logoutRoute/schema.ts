import type { StrictSchema } from 'morphism';
import type { ILogoutRouteFinal, ILogoutRouteResponse } from './interfaces';

export const logoutRouteSchema: StrictSchema<ILogoutRouteFinal, ILogoutRouteResponse> = {
  logged: 'logged_in',
};
