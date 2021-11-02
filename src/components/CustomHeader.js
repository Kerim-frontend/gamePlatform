import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import goBackImg from './../assets/img/arrowLeft.png'
import closeIcon from './../assets/img/close.png'
import burgerMenu from './../assets/img/burgerMenu.png'
import filterIcon from './../assets/img/filterIcon.png'
const Header = ({
    goBack,
    text,
    openDrawer,
    filter,
    close
}) => {
    const navigation = useNavigation()
    return (
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', height: 64, backgroundColor: '#10181F', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.35)', paddingLeft: 25, paddingRight: 25}} >
           {openDrawer && <TouchableOpacity style={{flex: 1}} onPress={() => navigation.openDrawer()}>
           <Image style={{}} source={burgerMenu} />
            </TouchableOpacity>} 
            {filter && <TouchableOpacity style={{}} onPress={() => navigation.navigate('Filter')}>
            <Image style={{}} source={filterIcon} />
            </TouchableOpacity>} 
            {!!goBack ? <TouchableOpacity style={{padding: 10}}
                onPress={!!goBack ? goBack : () => navigation.goBack()}
            >
                <Image source={close ? closeIcon : goBackImg} />
            </TouchableOpacity> : <Text />}
            <Text style={{color: '#fff'}}>{text}</Text>
            <Text />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Header;
