import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WithEvents from '../components/WithEvents';
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
        {(props) => <WithEvents {...props} setBarHeight={setBarHeight} />}
      </EventsStack.Screen>
      <EventsStack.Screen
        name="SingleEvent"
        // component={SingleEvent}
        options={{
          headerShown: false,
        }}>
        {(props) => <SingleEvent {...props} setBarHeight={setBarHeight} />}
      </EventsStack.Screen>
    </EventsStack.Navigator>
  );
}
