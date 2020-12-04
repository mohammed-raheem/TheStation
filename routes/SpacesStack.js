import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';

import Spaces2 from '../components/Spaces2';
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
        {(props) => <Spaces2 {...props} setBarHeight={setBarHeight} />}
      </SpacesStack.Screen>
      <SpacesStack.Screen
        name="Room"
        options={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
        {(props) => <Room {...props} setBarHeight={setBarHeight} />}
      </SpacesStack.Screen>
    </SpacesStack.Navigator>
  );
}
