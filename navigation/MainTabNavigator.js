import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStackNavigator';
import ExploreScreen from '../src/screens/explore';
import ProfileScreen from '../src/screens/profile';

const MainTab = createBottomTabNavigator();

export default MainTabNavigator = () => {
    return (
        <MainTab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name == 'Search') {
                iconName = 'search';
              } else if (route.name == 'Profile') {
                iconName = 'user';
              }
  
              return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
            },
          })}
        >
          <MainTab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}/>
          <MainTab.Screen name="Search" component={ExploreScreen} />
          <MainTab.Screen name="Profile" component={ProfileScreen} />
        </MainTab.Navigator>
    );
  };
  