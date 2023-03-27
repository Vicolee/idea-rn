import { createStackNavigator } from '@react-navigation/stack';
import CreatePostScreen from '../src/screens/CreatePost';
import HomeScreen from '../src/screens/Home';

const HomeStackNavigator = createStackNavigator();

export default HomeStack = () => {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen} 
                options={{ headerShown: false }}
            />
            <HomeStackNavigator.Screen
                name="CreatePost"
                component={CreatePostScreen} 
                options={{ headerShown: false }}
            />
        </HomeStackNavigator.Navigator>
    );
};