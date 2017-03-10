// example app from https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './src/pages/Login';

export default class RN_LoginScreen extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('RN_LoginScreen', () => RN_LoginScreen);
