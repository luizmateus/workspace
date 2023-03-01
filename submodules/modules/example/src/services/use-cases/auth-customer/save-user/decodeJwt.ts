import { jwt } from '@mobk/engine';
import type { IJWTDecoded } from '../../../domain/auth-customer/save-user';

export const decodeJwt = (loginJWT: string): IJWTDecoded => {
  const JWTDecoded = jwt.decodeJwt<IJWTDecoded>(loginJWT);

  return JWTDecoded;
};
