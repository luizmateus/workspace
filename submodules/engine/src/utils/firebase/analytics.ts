import analytics from '@react-native-firebase/analytics';

/** Enviar evento para o Firebase Analytics. */
const sendEvent = (eventName: string, eventOptions: any) => {
  analytics().logEvent(eventName, eventOptions);
};

export const fbAnalytics = {
  sendEvent,
};
