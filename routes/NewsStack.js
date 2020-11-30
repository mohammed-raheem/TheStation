import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import News2 from '../components/News2';
import SingleNews from '../components/SingleNews';

const NewsStack = createStackNavigator();

export default function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={News2}
        options={{
          headerShown: false,
        }}
      />
      <NewsStack.Screen
        name="SingleNews"
        component={SingleNews}
        options={{
          headerShown: false,
        }}
      />
    </NewsStack.Navigator>
  );
}
