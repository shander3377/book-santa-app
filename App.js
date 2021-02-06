import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppSideNavigator} from "./components/AppSideNavigator.js";
import {AppStackNavigator} from "./components/AppStackNavigator";

export default class App extends React.Components {
  render() {
    return (
 <AppContainer/>
    );
  }
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppSideNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);