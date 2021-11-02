import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import Buttles from './Battles';
import MyBattlesDetails from './MyBattlesDetails';
import CreatingBattle from './CreatingBattle'
const ButtlesScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false,}}>
            <Stack.Screen name="Buttles" component={Buttles} />
            <Stack.Screen name="MyBattlesDetails" component={MyBattlesDetails} />
            <Stack.Screen name="CreatingBattle" component={CreatingBattle} />
        </Stack.Navigator>
    );
}
export default ButtlesScreen;
