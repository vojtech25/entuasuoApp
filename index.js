/**
 * @format
 */


import { AppRegistry, LogBox } from 'react-native';
import App from './src/components/Navigation';
import { name as appName } from './app.json';


LogBox.ignoreLogs(['Remote debugger']);

AppRegistry.registerComponent(appName, () => App);
