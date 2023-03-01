export interface IAccessTokenBody {
  segment: string;
  documentNumber: string;
  channel: string;
  password: string;
  username: string;
}

export interface IAccessTokenResponse {
  canLogin: boolean;
  firstLogin: boolean;
  keyChange: boolean;
  lastAccessDate: string;
  access_token: string;
  token_type: string;
  expires_in: number;
  jwt: string;
}
