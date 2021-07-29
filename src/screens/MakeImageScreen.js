import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as routes from '../navigation/routes';

const MakeImageScreen = () => {
    const route = useRoute();
    const [barcode, setBarcode] = useState(route?.params?.barcode);
    return (
        <View style={styles.container}>
            <Text>{barcode}</Text>
        </View>
    );
}

export default MakeImageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})