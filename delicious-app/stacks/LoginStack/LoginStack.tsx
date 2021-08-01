import React from 'react';
import { Login } from './screens/Login';
import { MemberSelect } from './screens/MemberSelect';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const LoginStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name='MemberSelect' component={MemberSelect} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};