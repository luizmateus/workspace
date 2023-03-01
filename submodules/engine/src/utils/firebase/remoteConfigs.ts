import remoteConfig from '@react-native-firebase/remote-config';
import Config from 'react-native-config';

/** Carregar estado inicial do RemoteConfig. */
const load = async () => {
  try {
    const cacheExp = Number(Config.FB_REMOTE_CONFIG_CACHE);
    await remoteConfig().setDefaults({ test_config: 'config' });
    await remoteConfig().fetch(cacheExp);
    await remoteConfig().activate();
  } catch (err) {
    console.log('[FB] Remote Configs', 'Erro ao carregar Remote Configs', err);
  }
};

/** Buscar o objeto de uma RemoteConfig pelo nome. Somente para uso interno desta rotina. */
const get = (configName: string) => remoteConfig().getValue(configName);

/** Buscar uma RemoteConfig pelo nome, e retornar o valor em String. */
const getString = (configName: string): string => {
  try {
    const config = get(configName);
    return config.asString();
  } catch (err) {
    return '';
  }
};

/** Buscar uma RemoteConfig pelo nome, e retornar o valor em Boolean. */
const getBoolean = (configName: string): boolean => {
  try {
    const config = get(configName);
    return config.asBoolean();
  } catch (err) {
    return false;
  }
};

/** Buscar uma RemoteConfig pelo nome, e retornar o valor em Number. */
const getNumber = (configName: string): number => {
  try {
    const config = get(configName);
    return config.asNumber();
  } catch (err) {
    return 0;
  }
};

export const fbRemoteConfig = {
  load,
  getString,
  getBoolean,
  getNumber,
};
