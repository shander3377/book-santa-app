import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import {SettingsScreen} from "../screens/SettingsScreen.js"
import {MyDonationScreen} from "../screens/MyDonationsScreen.js"
import {NotificationsScreen} from "../screens/NotificationsScreen"
import CustomSideBarMenu  from './CustomSideBarMenu';

export const AppSideNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    Setting:{
      screen: SettingsScreen
    },
    MyDonations: {
      screen: MyDonationScreen
    },
    Notifications: {
      screen: NotificationsScreen
    }
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })