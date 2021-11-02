import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem
  } from '@react-navigation/drawer';
  import battles from './../assets/img/battlesIcon.png'
  import goOut from './../assets/img/goout.png'
import { Image } from 'react-native';
  
  function CustomDrawer(props) {
      const {navigation} = props
    return (
      <DrawerContentScrollView style={{backgroundColor: '#111921'}} {...props}>
        <DrawerItem
        label="Игры"
        onPress={() => navigation.navigate('Main')}
        labelStyle={{color: '#FFFFFF'}}
        icon={() => <Image source={battles} />}
        />
        <DrawerItem
        label="Создать сражение"
        onPress={() => navigation.navigate('CreatingBattle')}
        labelStyle={{color: '#FFFFFF'}}
        icon={() => <Image source={battles} />}
        />
        <DrawerItem
        label="Выйти"
        onPress={() => navigation.navigate('SignUp')}
        labelStyle={{color: '#FFFFFF'}}
        icon={() => <Image source={goOut} />}
        />
      </DrawerContentScrollView>
    );
  }

  export default CustomDrawer