import React  from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';
import * as routes from '../navigation/routes';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const BarcodeScreen = () => {
  const navigation = useNavigation();
    // onSuccess = (e) => {
    //     Linking.openURL(e.data).catch(err =>
    //         console.error('An error occured', err)
    //     );
    // };
    return (
        <QRCodeScanner
            onRead={(e) => {
              navigation.push(routes.NAVIGATION_MAKEIMAGE_ROUTE, {
                barcode: e.data,
              });
          }}
            flashMode={RNCamera.Constants.FlashMode.auto}
            markerStyle
            showMarker={true}
            topContent={
                <Text style={styles.centerText}>
                  Наведите камеру на штрихкод документа   
                </Text>
            }
        />
    );
}

export default BarcodeScreen;

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  });
  