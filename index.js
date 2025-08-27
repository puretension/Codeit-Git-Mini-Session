/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App/App';

function add(a,b) {return a + b}

AppRegistry.registerComponent(appName, () => App);
