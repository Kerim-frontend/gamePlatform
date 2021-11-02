import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { TextComponent, SuccessText, Button } from '../../components/atoms';
import dota from './../../assets/img/dota.png'
import dotaBg from './../../assets/img/warfaceBg.jpeg'

import { Canceled, Likes, Pending, StaticProduct, Success } from '../molecules';

export const Product = ({ navigation, navigationLink, status }) => {
    const goToScreen = () => {
        navigation.navigate(navigationLink)
    }
    return (
        <View style={styles.productList}>
            <TouchableOpacity style={styles.product} onPress={() => goToScreen()}>
                <Image source={dota} />
                <View style={styles.productInfo}>
                    <TextComponent style={styles.productTitle} text={'Dota 2, Играем на SF, мид до 2 смертей или до падения т1'} />
                    <View style={styles.productDate}>
                        <TextComponent text={'Игра начинается:'} />
                        <TextComponent style={styles.productTime} text={'20:00, 05.06.21'} />
                    </View>
                    <View style={styles.productFlex}>
                        <TextComponent text={'Ставка:'} />
                        <TextComponent style={styles.productRateSum} text={'1000 сом'} />
                    </View>
                    {status ? <Canceled style={{marginTop: 20}}/> : <StaticProduct style={{marginTop: 20}}/> }
                
                    {/* <Canceled style={{marginTop: 20}}/>
                    <Success style={{marginTop: 20}}/>
                    <Pending style={{marginTop: 20}}/> */}
                </View>
            </TouchableOpacity>

        </View>
    );
}

export const ProductDetail = ({navigation}) => {
    return (
        <>
            <Image style={{ width: '100%', height: 190, resizeMode: 'contain'}} source={dotaBg} />
            <View style={styles.productList}>
                <TextComponent text="Dota 2, Играем на SF, мид до 2 смертей или до падения т1" />
                <View style={styles.productFlex}>
                    <TextComponent style={styles.productGrayText} text="Создано сегодня, 13:10" />
                    <TextComponent style={styles.productTextCotegory} text="Категория “Dota 2”" />
                </View>
            </View>
            <View style={styles.productList}>
                <TextComponent style={styles.productGrayText} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
                <View style={styles.productDate}>
                    <TextComponent text={'Игра начинается:'} />
                    <TextComponent style={styles.productTime} text={'20:00, 05.06.21'} />
                </View>
                <View style={styles.productFlex}>
                    <TextComponent text={'Ставка:'} />
                    <TextComponent style={styles.productRateSum} text={'1000 сом'} />
                </View>
                <View style={styles.productFlex}>
                    <TextComponent text={'Формат игры:'} />
                    <TextComponent style={styles.productRateSum} text={'1х1'} />
                </View>
            </View>
            <View style={[{marginTop: 20}, styles.container]}>
         
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    productList: {
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#2A323A'
    },
    product: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    productInfo: {
        marginLeft: 15,
        maxWidth: 290,
    },
    productDate: {
        marginTop: 15,
        flexDirection: 'row',
    },
    productFlex: {
        marginTop: 5,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    productTime: {
        marginLeft: 20,
    },
    productTitle: {
        fontSize: 16,
    },
    productRateSum: {
        color: '#FFB156',
        marginLeft: 7
    },
    ProductDetailContent: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
    },
    productGrayText: {
        fontSize: 12,
        lineHeight: 14,
        color: '#B5B5B5',
        marginTop: 10
    },
    productTextCotegory: {
        fontSize: 12,
        lineHeight: 30,
        color: '#EB56C1',
        marginLeft: 50,
    }
})


