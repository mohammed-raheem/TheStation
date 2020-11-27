import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WithEvents from '../components/WithEvents';
import SingleEvent from '../components/SingleEvent';

const EventsStack = createStackNavigator();

export default function EventsStackScreen() {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen
        name="WithEvents"
        component={WithEvents}
        options={{
          headerShown: false,
        }}
      />
      <EventsStack.Screen
        name="SingleEvent"
        component={SingleEvent}
        options={{
          headerShown: false,
        }}
      />
    </EventsStack.Navigator>
  );
}
