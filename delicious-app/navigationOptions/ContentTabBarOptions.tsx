import React from 'react';
import { BottomTabBarOptions } from '@react-navigation/bottom-tabs';
import { colors } from '../themes/Lighttheme';

export const ContentTabBarOptions: BottomTabBarOptions = {
  activeBackgroundColor: colors.background,
  inactiveBackgroundColor: colors.background,
  activeTintColor: colors.highlighted,
  inactiveTintColor: colors.text,
  labelPosition: 'below-icon',
  labelStyle: {
    alignSelf: 'center',
  },
};