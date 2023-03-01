import type { StrictSchema } from 'morphism';
import type { ILoginRouteFinal, ILoginRouteResponse } from './interfaces';

export const loginRouteSchema: StrictSchema<ILoginRouteFinal, ILoginRouteResponse> = {
  userId: 'user_id',
  logged: 'logged_in',
};
