import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HouseName } from './screens/HouseName';
import { Password } from './screens/Password';
import { Private } from './screens/Private';

const Stack = createStackNavigator();

export const LoginStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='HouseName' component={HouseName}/>
      <Stack.Screen name='Password' component={Password}/>
      <Stack.Screen name='Private' component={Private}/>
    </Stack.Navigator>
  );
};