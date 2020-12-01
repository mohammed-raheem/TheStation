import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import News3 from '../components/News3';
import SingleNews from '../components/SingleNews';

const NewsStack = createStackNavigator();

export default function NewsStackScreen({setBarHeight}) {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        // component={News3}
        // children={() => <News3 setBarHeight={props.setBarHeight} />}
        options={{
          headerShown: false,
        }}>
        {(props) => <News3 {...props} setBarHeight={setBarHeight} />}
      </NewsStack.Screen>
      <NewsStack.Screen
        name="SingleNews"
        // component={SingleNews}
        options={{
          headerShown: false,
        }}>
        {(props) => <SingleNews {...props} setBarHeight={setBarHeight} />}
      </NewsStack.Screen>
    </NewsStack.Navigator>
  );
}
