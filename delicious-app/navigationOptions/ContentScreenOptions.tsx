import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { colors } from '../themes/Lighttheme';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ContentScreenOptions = (): StackNavigationOptions => ({
  headerTitle: 'delicious',
  headerTintColor: colors.highlighted,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: '700',
  },
  headerStyle: {
    backgroundColor: colors.background,
  },
  headerRight: () => <Icon name='user' size={17} color={colors.text}>Kristin</Icon>, // icon name depends on role
  headerRightContainerStyle: {
    marginRight: 10,
  },
});