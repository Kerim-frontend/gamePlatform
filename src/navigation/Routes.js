import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Game, Filter, } from './../screens'
import {Login, SignUp, RestorePassword } from './../screens'
import Tabs from './Tab';
import CustomDrawer from './customDrawer';
import Profile from '../components/Profile/Profile';
import CreatingBattle from '../screens/Battles/CreatingBattle';
import Buttles from '../screens/Battles/Battles';
function Routes() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
     <Drawer.Navigator 
     screenOptions={{headerShown: false}}
     drawerContent={(props) => <CustomDrawer {...props}/>}
     >
          <Drawer.Screen name="SignUp" component={Login} />
          <Drawer.Screen name="Main" component={Tabs} />
          <Drawer.Screen name="Filter" component={Filter} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="CreatingBattle" component={CreatingBattle} />
      </Drawer.Navigator> 
    </NavigationContainer>
  );
}

export default Routes;




 {/* <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="SignUp" component={SignUp} />
          <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>  */}
    
          {/* {AuthStack(Stack)} */}