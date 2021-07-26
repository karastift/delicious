import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const KitchenScreenOptions = ({ navigation, route }: any): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color }) => (
    <Icon name='food-apple-outline' size={35} color={color}/>
  ),
});