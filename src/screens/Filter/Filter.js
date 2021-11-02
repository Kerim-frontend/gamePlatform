import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import Header from '../../components/CustomHeader';

const Filter = ({navigation}) => {
    return (
        <SafeAreaView>
            <Header text="Фильтр" goBack={() => navigation.navigate('Home')} close />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default Filter;
