import type { IJWTDecoded } from '.';

export interface ISaveUserProps {
  loggedIn: boolean;
  access_token: string;
  jwtDecoded: IJWTDecoded;
}
