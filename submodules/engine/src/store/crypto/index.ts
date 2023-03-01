import create from 'zustand';
import type { ISecretCredentialsState } from './interfaces';

export const useCrypto = create<ISecretCredentialsState>(set => ({
  key: '',
  id: '',
  encryptedAESKey: '',
  idEncrypted: '',
  setSecretCredentials: value =>
    set(_state => ({
      key: value.key,
      id: value.id,
      encryptedAESKey: value.encryptedAESKey,
      idEncrypted: value.idEncrypted,
    })),
}));
