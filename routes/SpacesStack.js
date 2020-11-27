import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Spaces from '../components/Spaces';
import Room from '../components/Room';

const SpacesStack = createStackNavigator();

export default function SpacesStackScreen() {
  return (
    <SpacesStack.Navigator>
      <SpacesStack.Screen
        name="Spaces"
        component={Spaces}
        options={{
          headerShown: false,
        }}
      />
      <SpacesStack.Screen
        name="Room"
        component={Room}
        options={{
          headerShown: false,
        }}
      />
    </SpacesStack.Navigator>
  );
}
