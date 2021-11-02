import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { TextComponent } from '../../components/atoms';
import Header from '../../components/CustomHeader';
import { Confirmed, StarRating } from '../../components/molecules';
import Profile from './.../../../../components/Profile/Profile';

const ProfileUser = ({ navigation }) => {
    const [rating, setRating] = useState(2)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])
    return (
        <SafeAreaView style={{ backgroundColor: '#121B24', flex: 1 }}>
            <Header goBack={() => navigation.goBack()} text="Азим appass1nato Д." />
            <ScrollView style={styles.container}>
                <Profile navigation={navigation} />
                <TextComponent style={{marginBottom: 15, marginTop: 65}} text="Средняя оценка"/>
                <StarRating text="Вежливость"  style={{marginBottom: 15}}rating={rating} maxRating={maxRating} setRating={setRating} setMaxRating={setMaxRating} disabled />
                <StarRating text="Пунктуальность" style={{marginBottom: 15}} rating={rating} maxRating={maxRating} setRating={setRating} setMaxRating={setMaxRating} disabled />
                <StarRating text="Адекватность" rating={rating} maxRating={maxRating} setRating={setRating} setMaxRating={setMaxRating} disabled />
                <Confirmed style={{marginTop: 30}}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default ProfileUser;
