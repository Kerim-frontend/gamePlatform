import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Button, Input, TextComponent, ButtonError } from '../../components/atoms';
import Header from '../../components/CustomHeader';

const Reply = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header text="Сражение №6545612" goBack={() => navigation.goBack()} />
            <ScrollView style={{ paddingLeft: 20, paddingRight: 20, marginTop: 30 }}>
                <TextComponent text="Текст отклика" style={{ fontSize: 12, }} />
                <Input placeholderTextColor="grey" placeholder="Расскажите почему именно вы должны сражаться" multiline={true} dense={true} numberOfLines={4} style={{ height: 100, marginTop: 10, textAlignVertical: 'top', lineheight: 20 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderBottomColor: '#2A323A', paddingBottom: 20, marginTop: 50 }}>
                    <TextComponent text="Стоимость сражения:" />
                    <TextComponent style={{ color: '#FFB156' }} text="1 000 сом" />
                </View>
                <Button title="Откликнуться" style={{ marginTop: 60, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
                <ButtonError title="Откликнуться" style={{ marginTop: 60, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121B24',
        flex: 1,
    },
})

export default Reply;
