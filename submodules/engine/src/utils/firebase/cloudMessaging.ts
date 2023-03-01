import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

/** Carregar estado inicial do Cloud Messaging. */
const load = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) {
      throw new Error(`Permissão não concedida: ${authStatus}`);
    }
  } catch (err) {
    console.log('[FB] Cloud Messaging', 'Erro ao carregar Cloud Messaging', err);
  }
};

/** Handler de recebimento de mensagens
 *  quando o app está em Foreground.
 */
const setForegroundHandler = () => {
  return messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    console.log('[FB] Cloud Messaging - App em Foreground', JSON.stringify(remoteMessage));
  });
};

/** Handler de recebimento de mensagens
 *  quando o app está em Fechado ou em Background.
 */
const setBackgroundOrQuitHandler = () => {
  messaging().setBackgroundMessageHandler(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    console.log('[FB] Cloud Messaging - App Fechado ou em Background', JSON.stringify(remoteMessage));
  });
};

/** Handler de quando usuário interage com a notificação e o
 *  app está em Background.
 */
const setBackgroundInteraction = () => {
  messaging().onNotificationOpenedApp((remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    console.log('[FB] Cloud Messaging Interaction - App em Background', JSON.stringify(remoteMessage));
  });
};

/** Handler de quando usuário interage com a notificação e o
 *  app está Fechado.
 */
const setQuitInteraction = () => {
  messaging()
    .getInitialNotification()
    .then((remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
      if (remoteMessage) {
        console.log('[FB] Cloud Messaging Interaction - App Fechado', JSON.stringify(remoteMessage));
      }
    });
};

/** Obter Device Token do usuário. */
const getDeviceToken = async () => {
  console.log(await messaging().getToken());
};

export const fbCloudMsg = {
  load,
  setForegroundHandler,
  setBackgroundOrQuitHandler,
  setBackgroundInteraction,
  setQuitInteraction,
  getDeviceToken,
};
