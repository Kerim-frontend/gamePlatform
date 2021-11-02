import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
export const AuthTitle = ({ title }) => {
    return (
        <Text style={styles.AuthTitleStyle}>{title}</Text>
    );
}

export const TextComponent = ({ style, text }) => {
    return (
        <Text style={[styles.title, style]}>{text}</Text>
    );
}
export const Input = ({ style, ...props }) => {
    return (
        <TextInput
            {...props}
            placeholderTextColor="#535C65"
            style={[styles, styles.input]}
        />
    );
}
export const Button = ({ style, onPress, title, }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
export const ButtonError = ({ style, onPress, title, }) => {
    return (
        <TouchableOpacity style={[styles.buttonError, style]} onPress={onPress}>
            <Text style={[styles.text, {color: '#FB9191'}]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
export const Link = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.linkText} onPress={onPress}>{text}</Text>
        </TouchableOpacity>
    );
}
export const QuestionText = ({ text }) => {
    return (
        <Text style={styles.QuestionText}>{text}</Text>
    );
}
export const SuccessText = ({ text }) => {
    return (
        <Text style={styles.success}>{text}</Text>
    );
}


const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        lineHeight: 24
    },
    AuthTitleStyle: {
        fontFamily: 'SFProDisplay-Semibold',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 30
    },
    placeholderStyle: {
        color: '#fff'
    },
    input: {
        backgroundColor: '#272F37',
        width: '100%',
        borderRadius: 16,
        padding: 20,
        marginVertical: 10,
        color: '#fff'
    },
    container: {
        backgroundColor: '#0761DC',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 20,
        paddingRight:20,
        borderRadius: 16,
        marginVertical: 10,
    },
    buttonError: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 20,
        paddingRight:20,
        borderRadius: 1,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#FB9191',

    },
    text: {
        fontFamily: 'SFProDisplay-Regular',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontSize: 14,
    },
    linkText: {
        fontFamily: 'SFProDisplay-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#0B4797'
    },
    QuestionText: {
        fontFamily: 'SFProDisplay-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#767676'
    },
    success: {
        fontSize: 11,
        color: '#6BE795',
    }
})

