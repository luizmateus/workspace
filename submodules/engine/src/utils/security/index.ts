import decode from 'jwt-decode';

const decodeJwt = <TJWTDecoded>(jwt: string) => decode<TJWTDecoded>(jwt);

export const jwt = {
  decodeJwt,
};
