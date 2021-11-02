import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet, Text } from 'react-native';
import { AuthContainer } from '../../components/containers/AuthContainer';
import { AuthTitle, Button, Input, Link } from '../../components/atoms/index'
const Login = ({ navigation }) => {
    const SignUpTo = () => {
        navigation.navigate('SignUp')
    }
    return (
        <AuthContainer>
            <AuthTitle title='Авторизация' />
            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => alert(JSON.stringify(values))}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <Input placeholder="Ввведите номер"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email} />
                        <Input placeholder="Введите пароль"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry />
                        <Button title={"Войти"} style={styles.loginButton} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Link text="Нету профиля? Зарегистрироваться" onPress={() => SignUpTo()}/>
        </AuthContainer>

    );
}

const styles = StyleSheet.create({
    loginButton: {
        width: '60%',

    }
})

export default Login;
