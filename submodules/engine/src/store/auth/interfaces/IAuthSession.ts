interface CustomerHolder {
  identificationType: string;
  identificationNumber: string;
}

interface Account {
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
  customerHolder: CustomerHolder;
}

export interface IAuthSession {
  accessToken: string;
  name: string;
  document: string;
  customerId: string;
  touchId: boolean;
  accounts: Account[];
}
