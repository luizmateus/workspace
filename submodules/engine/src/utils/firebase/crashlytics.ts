import crashlytics from '@react-native-firebase/crashlytics';

/** Enviar log que será exibido no eventual crash do app. */
const sendLog = (log: any) => {
  let logString = '';
  try {
    logString = JSON.stringify(log);
  } catch (err) {
    if (err instanceof Error) {
      sendError(err);
    }
    logString = String(log);
  }
  crashlytics().log(logString);
};

/** Enviar atributos que serão exibidos no eventual crash do app. */
const sendAttr = (key: string, attr: any) => {
  let attrString = '';
  try {
    attrString = JSON.stringify(attr);
  } catch (err) {
    if (err instanceof Error) {
      sendError(err);
    }
    attrString = String(attr);
  }
  crashlytics().setAttribute(key, attrString);
};

/** Enviar um erro ao Crashlytics que não origine de crash do app. */
const sendError = (error: Error) => {
  crashlytics().recordError(error);
};

export const fbCrashlytics = {
  sendLog,
  sendError,
  sendAttr,
};
