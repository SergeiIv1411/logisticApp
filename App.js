/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import Navigation from './src/navigation/Navigation'

const App = () => {

  const onPressLearnMore = () => {
    console.log("fwfwe");
  };

  return (
    <Navigation />
  );
};

export default App;
