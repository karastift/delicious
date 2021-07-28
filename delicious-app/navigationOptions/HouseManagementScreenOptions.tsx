import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const HouseScreenOptions = ({ navigation, route }: any): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color }) => (
    <Icon name='home' size={30} color={color}/>
  ),
});