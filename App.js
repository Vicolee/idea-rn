import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// at the top

import React from 'react';
import MainTabBar from './navigation/main_tab_bar';

// disable really annoying in app warnings
console.disableYellowBox = true;

const App = (props) => {
  return <MainTabBar />;
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

