import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/CustomHeader';
import HomeList from './HomeList';
const Home = ({navigation}) => {
    const detail = () => {
        navigation.navigate('Details')
    }
    return (
        <SafeAreaView style={styles.container}>
             <Header openDrawer  filter/>
             <HomeList navigation={navigation}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121B24'
    },
});

export default Home;
