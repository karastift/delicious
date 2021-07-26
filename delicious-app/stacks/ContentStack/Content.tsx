import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Whiteboard } from './screens/Whiteboard';
import { Kitchen } from './screens/Kitchen';
import { HouseManagement } from './screens/HouseManagement';

const Tab = createBottomTabNavigator();

export const Content = () => {

  /*
  calendar with all wishes, new food additions, like dashboard
  all foods 
  settings for house 
  */

  return (
    <Tab.Navigator>
      <Tab.Screen name='Whiteboard' component={Whiteboard}/>
      <Tab.Screen name='Kitchen' component={Kitchen}/>
      <Tab.Screen name='House Management' component={HouseManagement}/>
    </Tab.Navigator>
  );
};