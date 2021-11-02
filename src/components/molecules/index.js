import React from 'react';
import { View, StyleSheet, Text, Linking, Image, TouchableOpacity } from 'react-native';
import phoneIcon from './../../assets/img/phone.png'
import telegramIcon from './../../assets/img/telegram.png'
import WhatsAppIcon from './../../assets/img/WhatsApp.png'
import dota from './../../assets/img/dota.png'
import coinIcon from './../../assets/img/coin.png'
import eyes from './../../assets/img/eyes.png'
import share from './../../assets/img/share.png'
import canceledIcon from './../../assets/img/canceled.png'
import successIcon from './../../assets/img/success.png'
import pendingIcon from './../../assets/img/pending.png'
import battlesIcon from './../../assets/img/battlesIcon.png'
import percent from './../../assets/img/percent.png'
import greenFlag from './../../assets/img/greenFlag.png'
import redFlag from './../../assets/img/redFlag.png'
import like from './../../assets/img/like.png'
import dislike from './../../assets/img/dislike.png'
import starFill from './../../assets/img/starFill.png'
import starLine from './../../assets/img/star.png'
import avatar from './../../assets/img/avatar.png'
import { SuccessText, TextComponent } from '../atoms';
// Contacts
export const Contacts = ({ style }) => {
    return (
        <View style={style}>
            <View style={styles.contactsWrapper}>
                <View style={styles.contactsItem} onPress={() => Linking.openURL('tel:4159955552 ')}>
                    <Image source={phoneIcon} />
                    <Text style={styles.contactsLink}>Телефон</Text>
                </View>
                <View style={styles.contactsItem}>
                    <Image source={telegramIcon} />
                    <Text style={styles.contactsLink}
                        onPress={() => Linking.openURL('tel:4159955552 ')}>
                        Telegram
            </Text>
                </View>
                <View style={styles.contactsItem}>
                    <Image source={WhatsAppIcon} />
                    <Text style={styles.contactsLink}
                        onPress={() => Linking.openURL('tel:4159955552 ')}>
                        WhatsApp
            </Text>
                </View>
            </View>
        </View>

    );
}
// SimilarTasks
export const SimilarTasks = () => {
    return (
        <View style={[styles.flex, { marginBottom: 40, justifyContent: 'space-between' }]}>
            <Image source={dota} />
            <TextComponent style={{ width: 200 }} text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem" />
            <View style={styles.flexColumn}>
                <TextComponent text="2500 с" />
                <Image source={coinIcon} />
            </View>
        </View>
    )
}
// StaticProduct
export const StaticProduct = ({ style }) => {
    return (
        <View style={[styles.flex, style]}>
            <View style={styles.flex}>
                <Image style={{ marginRight: 5 }} source={eyes} />
                <TextComponent style={{color: '#949494', fontSize: 12}} text="562 просмотров" />
            </View>
            <View style={[styles.flex, { marginLeft: 20 }]}>
                <Image style={{ marginRight: 5 }} source={share} />
                <TextComponent style={{color: '#949494', fontSize: 12}} text="18 предложений" />
            </View>
        </View>
    )
}
// state
export const Canceled = ({ style }) => {
    return (
        <View style={[style, { flexDirection: 'row', alignItems: 'center' }]}>
            <Image style={{ marginRight: 5 }} source={canceledIcon} />
            <TextComponent text="Отменен" />
        </View>
    )
}
export const Success = ({ style }) => {
    return (
        <View style={[style, { flexDirection: 'row', alignItems: 'center' }]}>
            <Image style={{ marginRight: 5 }} source={successIcon} />
            <TextComponent text="Завершен" />
        </View>
    )
}
export const Pending = ({ style }) => {
    return (
        <View style={[style, { flexDirection: 'row', alignItems: 'center' }]}>
            <Image style={{ marginRight: 5 }} source={pendingIcon} />
            <TextComponent text="В ожидании" />
        </View>
    )
}
// static battle
export const StatisticsBattle = ({ style, data }) => {
    return (
        <View style={[style, { flexDirection: 'row', alignItems: 'center' }]}>
            <Image style={{ marginRight: 5, width: 7, height: 7 }} source={battlesIcon} />
            <TextComponent text="47" />
        </View>
    )
}
export const WinningPercentage = ({ style, data }) => {
    return (
        <View style={[style, { flexDirection: 'row', alignItems: 'center' }]}>
            <Image style={{ marginRight: 5, width: 10, height: 10, }} source={percent} />
            <TextComponent text="60" style={{ color: '#00A3FF' }} />
        </View>
    )
}
export const WinningBattles = ({ style, data }) => {
    return (
        <View style={[style, { flexDirection: 'row', alignItems: 'center' }]}>
            <Image style={{ marginRight: 5, width: 10, height: 10, }} source={greenFlag} />
            <TextComponent text="28" style={{ color: '#6BE795' }} />
        </View>
    )
}
export const DefeatsBattles = ({ style, data }) => {
    return (
        <View style={[style, { flexDirection: 'row', alignItems: 'center' }]}>
            <Image style={{ marginRight: 5, width: 10, height: 10, }} source={redFlag} />
            <TextComponent text="28" style={{ color: '#FB9191' }} />
        </View>
    )
}
// likes
export const Likes = ({ style, data }) => {
    return (
        <View style={[style, { flexDirection: 'row' }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Image style={{ marginRight: 5 }} source={like} />
                <SuccessText text="23" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                <Image style={{ marginRight: 5 }} source={dislike} />
                <Text style={{ color: '#6A6E77', fontSize: 11, }}>0</Text>
            </View>
        </View>
    )
}
// star rating
export const StarRating = ({ text, style, maxRating, rating, setRating, setMaxRating, disabled }) => {
    return (
        <View style={[styles.starWrapper, style]}>
            <TextComponent style={{ width: 120 }} text={text} />
            {maxRating.map((item, index) => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        disabled={disabled}
                        onPress={() => setRating(item)}
                    >
                        <Image
                            source={item <= rating ? starFill : starLine}
                            style={[styles.ImgMdStyle, { marginRight: 8 }]}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
// Confirmed
export const Confirmed = ({ style }) => {
    return (
        <View style={[style]}>
            <TextComponent style={{ marginBottom: 30 }} text="Подтверждены" />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                <Image style={[styles.ImgMdStyle, { marginRight: 20 }]} source={phoneIcon} />
                <TextComponent text="Электронная почта" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                <Image style={[styles.ImgMdStyle, { marginRight: 20 }]} source={phoneIcon} />
                <TextComponent text="Телефонный номер" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                <Image style={[styles.ImgMdStyle, { marginRight: 20 }]} source={phoneIcon} />
                <TextComponent text="Телефонный номер" />
            </View>
        </View>
    )
}
export const Client = ({ style }) => {
    return (
        <View style={style}>
            <TextComponent text="Заказчик" />
            <View style={styles.productFlex}>
                <Image style={{ width: 42, height: 42, resizeMode: 'contain' }} source={avatar} />
                <View style={{ flexDirection: 'column', marginLeft: 10, }}>
                    <TextComponent text="Азим Д. . appass1nato " />
                    <Likes style={{ marginTop: 10 }} />
                </View>
            </View>
        </View>
    )
}
// style
const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexColumn: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    productFlex: {
        marginTop: 5,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    contactsWrapper: {
        backgroundColor: '#272F37',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 18,
        paddingBottom: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 16,
    },
    contactsItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    contactsLink: {
        fontSize: 12,
        marginTop: 5,
        color: '#9D9D9D',
    },
    starWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ImgMdStyle: {
        width: 18,
        height: 18,
        resizeMode: 'cover'
    }
})

