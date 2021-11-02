import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AuthContainer } from '../../components/containers/AuthContainer';
import { AuthTitle, Button, Input, Link } from '../../components/atoms/index'
const SignUp = () => {
    return (
        <AuthContainer >
            <AuthTitle title='Регистрация' />
            <Input placeholder="Ввведите номер" />
            <Input placeholder="Введите эл. почту" />
            <Input placeholder="Введите игровой ник" />
            <Input placeholder="Введите пароль" secureTextEntry />
            <Input placeholder="Введите пароль" secureTextEntry />
            <Button title={"Регистрация"} />
        </AuthContainer>
    );
}

const styles = StyleSheet.create({

})

export default SignUp;
