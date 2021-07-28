import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const RootStack = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>);
};

export default function Navigation() {
  return (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
  );
}
