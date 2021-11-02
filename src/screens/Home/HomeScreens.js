import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';
import ProfileUser from './ProfileUser';
import Reply from './Reply';
const HomeScreens = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator  screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="ProfileUser" component={ProfileUser} />
                <Stack.Screen name="Reply" component={Reply} />
            </Stack.Navigator>
    );
}


export default HomeScreens;
