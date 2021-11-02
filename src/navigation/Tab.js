import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreens, Game, ButtlesScreen } from './../screens'
import { Image } from 'react-native';
import mainTabs from './../assets/img/mainTabs.png'
import gameTabs from './../assets/img/gameTabs.png'
import profileTabs from './../assets/img/profile.png'
import battlesTabs from './../assets/img/battlesIcon.png'
import Profile from '../components/Profile/Profile';
function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#fff', tabBarStyle: { backgroundColor: '#111921', paddingTop: 15, height: 85 } }} initialRouteName="Игры">
        <Tab.Screen
          name="Главная"
          component={HomeScreens}
          options={{
            tabBarIcon: (focused) => {
              {
                return (
                  <Image style={{ marginBottom: 10 }} source={mainTabs} />
                )
              }
            }
          }}
        />
        <Tab.Screen
          name="Игры"
          component={Game}
          options={{
            tabBarIcon: (focused) => {
              {
                return (
                  <Image style={{ marginBottom: 10 }} source={gameTabs} />
                )
              }
            }
          }} />
        <Tab.Screen
          name="Сражения"
          component={ButtlesScreen}
          options={{
            tabBarIcon: (focused) => {
              {
                return (
                  <Image style={{ marginBottom: 10 }} source={battlesTabs} />
                )
              }
            }
          }} />
        <Tab.Screen
          name="Профиль"
          component={Profile}
          options={{
            tabBarIcon: (focused) => {
              {
                return (
                  <Image style={{ marginBottom: 10 }} source={profileTabs} />
                )
              }
            }
          }} />
      </Tab.Navigator>
    </>
  );
}
export default Tabs;