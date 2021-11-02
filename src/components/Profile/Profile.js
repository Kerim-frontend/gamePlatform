import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { TextComponent } from '../atoms';
import { StatisticsBattle, WinningBattles, WinningPercentage, DefeatsBattles, Likes, Contacts } from '../molecules';
import starIcon from './../../assets/img/star.png'
import avatar from './../../assets/img/avatar.png'
const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.Profile}>
            <View style={styles.ProfileTop}>
                <View style={[styles.flex]}>
                    <View >
                        <TextComponent style={{ fontSize: 11 }} text="Сражений" />
                        <StatisticsBattle style={{ marginTop: 5 }} />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TextComponent style={{ color: '#00A3FF', fontSize: 11 }} text="Процент побед" />
                        <WinningPercentage style={{ marginTop: 5 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Image style={styles.profileAvatar} source={avatar} />
                    <Likes style={{ marginTop: 20 }} />
                </View>
                <View style={[styles.flex]}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TextComponent style={{ color: '#6BE795', fontSize: 11 }} text="Побед" />
                        <WinningBattles style={{ marginTop: 5 }} />
                    </View>
                    <View style={{ alignItems: 'flex-end', marginTop: 30 }}>
                        <TextComponent style={{ color: '#FB9191', fontSize: 11 }} text="Поражений" />
                        <DefeatsBattles style={{ marginTop: 5 }} />
                    </View>
                </View>
            </View>
            <Contacts style={[{ marginTop: 30 }]} />
            <View style={[{ marginTop: 30, }]}>
                <TextComponent style={{ fontSize: 12 }} text="О себе" />
                <TextComponent style={{ fontSize: 12 }} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Profile: {
        backgroundColor: '#121B24',
        flex: 1
    },

    ProfileTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    profileAvatar: {
        width: 145,
        height: 145,
        borderRadius: 55,
        resizeMode: 'contain',
    }
})

export default Profile;
