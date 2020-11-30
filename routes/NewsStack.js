import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import News3 from '../components/News3';
import SingleNews from '../components/SingleNews';

const NewsStack = createStackNavigator();

export default function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={News3}
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
