import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import * as routes from './routes';
import BarcodeScreen from '../screens/BarcodeScreen';

const Stack = createStackNavigator();

const RootStack = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen 
        name={routes.NAVIGATION_HOME_ROUTE} 
        component={HomeScreen}
        options={({navigation, route}) => ({ 
          title: 'Главная',
        })} 
        />
    <Stack.Screen 
        name={routes.NAVIGATION_BARCODESCANER_ROUTE} 
        component={BarcodeScreen}
        options={({navigation, route}) => ({ 
          title: 'Сканер штрихкода',
        })}  
      />
  </Stack.Navigator>);
};

export default function Navigation() {
  return (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
  );
}
