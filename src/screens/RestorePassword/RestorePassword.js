import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { AuthContainer } from '../../components/containers/AuthContainer';
import {AuthTitle, Button, Input, Link, QuestionText} from '../../components/atoms/index'
const RestorePassword = ({navigation}) => {
    const toSignUp = ( ) => {
        navigation.navigate('SignUp')
    }
    
    return (
        <AuthContainer>
              <AuthTitle title='Восстановление пароля'/>
              <Input placeholder="Ввведите номер телефона или эл. почту" />
              <Button title={"Восстановить пароль"} style={styles.loginButton} />
               <Text><QuestionText text="У вас есть профиль?"/>  <Link text="Зарегистрироваться" onPress={() => toSignUp()}/></Text> 
        </AuthContainer>
          
    );
}

const styles = StyleSheet.create({
    loginButton: {
        width: '60%',

    }
})

export default RestorePassword;
