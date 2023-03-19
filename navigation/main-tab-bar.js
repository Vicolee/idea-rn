import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../src/screens/home';
import ExploreScreen from '../src/screens/explore';
import ProfileScreen from '../src/screens/profile';

const HomeTab = (props) => {
  return <HomeScreen/>
};

const ExploreTab = (props) => {
  return <ExploreScreen />
}

const ProfileTab = (props) => {
  return <ProfileScreen />
}

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeScreen"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
  
              if (route.name === 'HomeScreen') {
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
          <Tab.Screen name="HomeScreen" component={HomeTab} />
          <Tab.Screen name="Search" component={ExploreTab} />
          <Tab.Screen name="Profile" component={ProfileTab} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
export default MainTabBar;