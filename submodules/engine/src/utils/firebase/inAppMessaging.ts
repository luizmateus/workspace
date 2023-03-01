import inAppMessaging from '@react-native-firebase/in-app-messaging';

/** Carregar estado inicial do InApp Messaging. */
const load = async () => {
  try {
    await inAppMessaging().setMessagesDisplaySuppressed(false);
  } catch (err) {
    console.log('[FB] In App Messaging', 'Erro ao carregar In App Messaging', err);
  }
};

/** Definir aceite do InApp Messaging. */
const set = async (show: boolean) => {
  inAppMessaging().setMessagesDisplaySuppressed(show);
};

export const fbInAppMsg = {
  load,
  set,
};
