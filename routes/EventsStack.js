import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';

import WithEvents2 from '../components/WithEvents2';
import SingleEvent from '../components/SingleEvent';

const EventsStack = createStackNavigator();

export default function EventsStackScreen({setBarHeight}) {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen
        name="WithEvents"
        // component={WithEvents}
        options={{
          headerShown: false,
        }}>
        {(props) => <WithEvents2 {...props} setBarHeight={setBarHeight} />}
      </EventsStack.Screen>
      <EventsStack.Screen
        name="SingleEvent"
        // component={SingleEvent}
        options={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}>
        {(props) => <SingleEvent {...props} setBarHeight={setBarHeight} />}
      </EventsStack.Screen>
    </EventsStack.Navigator>
  );
}
