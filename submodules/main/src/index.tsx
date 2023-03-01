import React, { useCallback, useEffect } from 'react';
import { Navigator } from './navigator';
import { Contexts, fbCloudMsg, fbDynamicLinks, fbInAppMsg, fbRemoteConfig } from '@mobk/engine';

// import { investigate } from 'react-native-bundle-splitter/dist/utils';
// console.log(`module.exports = ${JSON.stringify(investigate().loaded.sort())};`);

const App = () => {
  const initAsync = useCallback(async () => {
    // Remote Configs
    await fbRemoteConfig.load();

    // InApp Messaging
    await fbInAppMsg.load();
    await fbInAppMsg.set(true);

    // Cloud Messaging
    await fbCloudMsg.load();
  }, []);

  const init = useCallback(() => {
    // Cloud Messaging
    const fbCloudMsgUnsub = fbCloudMsg.setForegroundHandler();
    fbCloudMsg.setBackgroundInteraction();
    fbCloudMsg.setQuitInteraction();

    // Dynamic Links
    const fbDynamicLinksUnsub = fbDynamicLinks.setForegroundHandler();
    fbDynamicLinks.setBackgroundOrQuitHandler();

    // Limpeza de Handlers
    return () => {
      fbCloudMsgUnsub();
      fbDynamicLinksUnsub();
    };
  }, []);

  useEffect(() => {
    initAsync();
    return init();
  }, []);

  return (
    <Contexts>
      <Navigator />
    </Contexts>
  );
};

export default App;
