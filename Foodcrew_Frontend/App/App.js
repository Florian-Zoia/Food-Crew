import React, { Component } from 'react';
import Router from './Router/Router';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs([
  "[ Deprecation in 'createStackNavigator':\n" +
  "'headerLayoutPreset' is renamed to 'headerTitleAlign' and moved to 'navigationOptions'. Specify it in 'defaultNavigationOptions' to keep the same behaviour.",
]);
export default class App extends Component {


  render() {
    return (
        <Router />
    );
  }
}