import './src/initialization';

import { AppRegistry } from 'react-native';
import App from './src';
import { name as AppName } from './app.json';

AppRegistry.registerComponent(AppName, () => App);
