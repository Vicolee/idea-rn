import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Home from '../components/home';

const HomeTab = (props) => {
  return <Home/>
};

const NewSeedTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>New Seed</Text></View>;
};

const ProfileTab = (props) => {
    return <View style={{ flex: 1, justifyContent: 'center' }}><Text>Profile</Text></View>;
};

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name == 'New Seed') {
                iconName = 'plus-circle';
              } else if (route.name == 'Profile') {
                iconName = 'user';
              }
  
              return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeTab} />
          <Tab.Screen name="New Seed" component={NewSeedTab} />
          <Tab.Screen name="Profile" component={ProfileTab} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
export default MainTabBar;