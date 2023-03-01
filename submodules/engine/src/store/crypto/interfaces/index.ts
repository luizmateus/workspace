export interface ISecretKeys {
  key: string;
  id: string;
  encryptedAESKey: string;
  idEncrypted: string;
}

export interface ISecretCredentialsState extends ISecretKeys {
  setSecretCredentials: (value: ISecretKeys) => void;
}
