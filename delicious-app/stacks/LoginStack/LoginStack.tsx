import React from 'react';
import { Login } from './screens/Login';
import { MemberSelect } from './screens/MemberSelect';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginStackParamList, LoginStackProps } from '../../types/NavigationTypes';

const Stack = createStackNavigator<LoginStackParamList>();

export const LoginStack: React.FC<LoginStackProps> = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name='MemberSelect' component={MemberSelect} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};