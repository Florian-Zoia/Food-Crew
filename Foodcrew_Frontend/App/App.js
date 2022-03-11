import React, { Component } from 'react';
import Router from './Router/Router';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default class App extends Component {


  render() {
    return (
        <Router />
    );
  }
}