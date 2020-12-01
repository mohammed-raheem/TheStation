import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Spaces from '../components/Spaces';
import Room from '../components/Room';

const SpacesStack = createStackNavigator();

export default function SpacesStackScreen({setBarHeight}) {
  return (
    <SpacesStack.Navigator>
      <SpacesStack.Screen
        name="Spaces"
        options={{
          headerShown: false,
        }}>
        {(props) => <Spaces {...props} setBarHeight={setBarHeight} />}
      </SpacesStack.Screen>
      <SpacesStack.Screen
        name="Room"
        options={{
          headerShown: false,
        }}>
        {(props) => <Room {...props} setBarHeight={setBarHeight} />}
      </SpacesStack.Screen>
    </SpacesStack.Navigator>
  );
}
