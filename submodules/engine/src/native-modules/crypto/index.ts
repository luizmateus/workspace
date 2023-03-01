import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR = "The package '@mobk/engine' doesn't seem to be linked.";

const ModuleCrypto = NativeModules.ModuleCrypto
  ? NativeModules.ModuleCrypto
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

export function getRandomByteKey(): Promise<string> {
  return Platform.OS === 'ios' ? ModuleCrypto.getRandomByteKey('') : ModuleCrypto.getRandomByteKey();
}

export function asymmetricEncrypt(value: string, isProduction: boolean): Promise<string> {
  return ModuleCrypto.asymmetricEncrypt(value, isProduction);
}

export function symmetricEncrypt(value: string, key: string): Promise<string> {
  return ModuleCrypto.symmetricEncrypt(value, key);
}

export function symmetricDecrypt(encrypted: string, key: string): Promise<string> {
  return ModuleCrypto.symmetricDecrypt(encrypted, key);
}

export const cryptoModule = {
  getRandomByteKey,
  asymmetricEncrypt,
  symmetricEncrypt,
  symmetricDecrypt,
};
