import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import ExchangeScreen from './screens/ExchangeScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  ExchangeScreen: {screen: ExchangeScreen},
},
)
const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen: {screen:SignUpLoginScreen}
})

const AppContainer =  createAppContainer(switchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});