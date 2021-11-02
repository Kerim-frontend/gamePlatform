import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import { Button, TextComponent } from '../../components/atoms';
import Header from '../../components/CustomHeader';
import dota from './../../assets/img/dota.png'
const CreatingBattle = () => {
    const [radio, setRadio] = useState(null)
    return (
        <SafeAreaView style={{backgroundColor: '#121B24', flex: 1}}>
            <Header text="Создание сражения"/>
            <ScrollView style={{marginTop: 30}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 35, backgroundColor: '#1E2B39', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20}}>
                    <Image style={{marginRight: 30}} source={dota}/>
                    <TextComponent style={{fontSize: 16,}} text="Dota 2"/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 35}}>
                    <Image style={{marginRight: 30}} source={dota}/>
                    <TextComponent style={{fontSize: 16,}} text="Dota 2"/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 35}}>
                    <Image style={{marginRight: 30}} source={dota}/>
                    <TextComponent style={{fontSize: 16,}} text="Dota 2"/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 35}}>
                    <Image style={{marginRight: 30}} source={dota}/>
                    <TextComponent style={{fontSize: 16,}} text="Dota 2"/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 35}}>
                    <Image style={{marginRight: 30}} source={dota}/>
                    <TextComponent style={{fontSize: 16,}} text="Dota 2"/>
                </View>
                <Button style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} title="Далее"/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default CreatingBattle;
