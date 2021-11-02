import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { ProductDetail } from '../../components/templates';
import Header from '../../components/CustomHeader';
import { Client, Contacts, SimilarTasks, StaticProduct } from '../../components/molecules';
import {Button, TextComponent} from './../../components/atoms'
const Details = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Header text="Сражение №6545612" goBack={() => navigation.goBack()} />
            <ScrollView>
                <ProductDetail navigation={navigation}/>
                <StaticProduct style={styles.container} />
                <Client style={[styles.container, {marginTop: 50}]}/>
               <Contacts style={[styles.container, { marginTop: 30, }]} />
                <View style={[styles.container, {marginTop: 40}]}>
                <TextComponent style={{marginBottom: 30}} text="Похожие задания"/>
                <SimilarTasks />
                <SimilarTasks />
                <SimilarTasks />
                </View>
                <Button  onPress={() => navigation.navigate('Reply')} style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}} title="Откликнуться"/>
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
        paddingRight: 20 
    },
})

export default Details;
