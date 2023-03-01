export interface IJWTCustomerHolder {
  identificationType: string;
  identificationNumber: string;
}

export interface IJWTAccount {
  number: string;
  status: string;
  statusId: string;
  firstAccessStatus: boolean;
  firstAccessStatusNemotecnico: string;
  favored: boolean;
  branch: string;
  bank: string;
  productId: string;
  productIdNemotecnico: string;
  subProductId: string;
  identificationType: string;
  identificationNumber: string;
  customerHolder: IJWTCustomerHolder;
}

export interface IJWTClaims {
  context: {
    session: string;
    operator: string;
    businessDate: string;
    channel: string;
    touchId: boolean;
    authenticationTypeId: string;
    institutionId: string;
  };
  customer: {
    name: string;
    document: string;
    customerId: string;
    id: string;
    userId: string;
    personId: string;
    administrator: true;
  };
  accounts: IJWTAccount[];
}

export interface IJWTDecoded {
  claims: IJWTClaims;
  jti: string;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
}
