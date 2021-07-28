import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import * as routes from '../navigation/routes';

const BarcodeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Сканер штрихкодов
            </Text>
        </View>
    );
}

export default BarcodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
    button: {
        width: 200,
        height: 60,
        backgroundColor: '#513855',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    button_text: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontStyle: 'italic',
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})