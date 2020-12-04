import React from 'react';
import {Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useIsFocused} from '@react-navigation/native';
import {TransitionPresets} from '@react-navigation/stack';

import News3 from '../components/News3';
import SingleNews from '../components/SingleNews';

const NewsStack = createStackNavigator();

export default function NewsStackScreen({setBarHeight}) {
  const isFocused = useIsFocused();

  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        // component={News3}
        // children={() => <News3 setBarHeight={props.setBarHeight} />}
        options={{
          headerShown: false,
        }}>
        {(props) => (
          <News3 {...props} setBarHeight={setBarHeight} isFocused={isFocused} />
        )}
      </NewsStack.Screen>
      <NewsStack.Screen
        name="SingleNews"
        // component={SingleNews}
        options={{
          headerShown: false,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}>
        {(props) => <SingleNews {...props} setBarHeight={setBarHeight} />}
      </NewsStack.Screen>
    </NewsStack.Navigator>
  );
}
