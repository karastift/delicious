import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { colors } from '../themes/Lighttheme';

export const LoginScreenOptions = (): StackNavigationOptions => ({
  headerTitle: 'delicious',
  headerTintColor: colors.highlighted,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: '700',
  },
  headerStyle: {
    backgroundColor: colors.background,
  },
});