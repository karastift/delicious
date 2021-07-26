import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const WhiteboardScreenOptions = ({ navigation, route }: any): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color }) => (
    <Icon name='calendar' size={30} color={color}/>
  ),
});