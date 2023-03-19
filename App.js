import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
//tell React that we will implement a navigator
import { NavigationContainer } from "@react-navigation/native";
//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from './navigation/MainTabNavigator';

// disable really annoying in app warnings
console.disableYellowBox = true;

const RootStack = createNativeStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Main" component={MainTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
