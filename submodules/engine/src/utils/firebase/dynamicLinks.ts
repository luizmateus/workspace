import dynamicLinks, { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';

/** Handler de abertura de Dynamic Link
 *  quando o app está em Foreground.
 */
const setForegroundHandler = () => {
  return dynamicLinks().onLink((link: FirebaseDynamicLinksTypes.DynamicLink) => {
    console.log('[FB] Dynamic Links - App em Foreground', JSON.stringify(link));
  });
};

/** Handler de abertura de Dynamic Link
 *  quando o app está em Fechado ou em Background.
 */
const setBackgroundOrQuitHandler = () => {
  dynamicLinks()
    .getInitialLink()
    .then((link: FirebaseDynamicLinksTypes.DynamicLink | null) => {
      if (link) {
        console.log('[FB] Dynamic Links - App Fechado ou em Background', JSON.stringify(link));
      }
    });
};

export const fbDynamicLinks = {
  setForegroundHandler,
  setBackgroundOrQuitHandler,
};
