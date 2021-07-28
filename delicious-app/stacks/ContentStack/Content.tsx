import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Whiteboard } from './screens/Whiteboard';
import { Kitchen } from './screens/Kitchen';
import { House } from './screens/House';
import { ContentTabBarOptions } from '../../navigationOptions/ContentTabBarOptions';
import { WhiteboardScreenOptions } from '../../navigationOptions/WhiteboardScreenOptions';
import { HouseScreenOptions } from '../../navigationOptions/HouseManagementScreenOptions';
import { KitchenScreenOptions } from '../../navigationOptions/KitchenScreenOptions';

const Tab = createBottomTabNavigator();

export const Content = () => {

  /*
  calendar with all wishes, new food additions, like dashboard
  all foods 
  settings for house 
  */

  return (
    <Tab.Navigator tabBarOptions={ContentTabBarOptions}>
      <Tab.Screen name='Whiteboard' component={Whiteboard} options={WhiteboardScreenOptions}/>
      <Tab.Screen name='Kitchen' component={Kitchen} options={KitchenScreenOptions}/>
      <Tab.Screen name='House' component={House} options={HouseScreenOptions}/>
    </Tab.Navigator>
  );
};