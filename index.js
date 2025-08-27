/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/App/App";

function greet(name) {
  return `Hello, ${name}!`;
}

function farewell(name) {
  return `Goodbye, ${name}!`;
}

function add(a,b) {return a + a + b + c + d + b}

AppRegistry.registerComponent(appName, () => App);
