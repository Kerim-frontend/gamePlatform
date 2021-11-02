import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { TextComponent } from '../../components/atoms';
import Header from '../../components/CustomHeader';
import { Client, Contacts, StaticProduct } from '../../components/molecules';
import { ProductDetail } from '../../components/templates';

const MyBattlesDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Header text="Сражение №6545612" goBack={() => navigation.goBack()} />
            <ScrollView>
                <ProductDetail navigation={navigation} />
                <StaticProduct style={styles.container} />
                <Client style={[styles.container, {marginTop: 50}]}/>
                <Contacts style={[styles.container, {marginTop: 30}]}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#121B24',
        flex: 1,
    },
    container: {
        paddingLeft: 20, 
        paddingRight: 20,
    }
})

export default MyBattlesDetails;
