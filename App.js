import { StyleSheet, View } from 'react-native';
import React from 'react';
//tell React that we will implement a navigator
import { NavigationContainer } from "@react-navigation/native";
//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from './navigation/MainTabNavigator';
import { Provider } from 'react-redux'
import store from './src/store'
import 'expo-dev-menu';

// disable really annoying in app warnings
console.disableYellowBox = true;

const RootStack = createNativeStackNavigator();

const App = (props) => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Main" component={MainTabNavigator} />
          </RootStack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Inter'
  },
});

export default App;
