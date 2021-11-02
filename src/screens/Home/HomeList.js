import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import {Product} from './../../components/templates'
const HomeList = ({navigation}) => {
    const goToScreen = ({navigation}) => {
        navigation.navigate('Details')
    }
    return (
        <ScrollView style={styles.productList}>
           <Product navigation={navigation} navigationLink="Details" />
           <Product navigation={navigation} navigationLink="Details"/>
           <Product navigation={navigation} navigationLink="Details"/>
           <Product navigation={navigation} navigationLink="Details"/>
           <Product navigation={navigation} navigationLink="Details"/>
           <Product navigation={navigation} navigationLink="Details"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

})

export default HomeList;
