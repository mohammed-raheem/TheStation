import React, {useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import NewsIcon from './assets/icons/NewsIcon';
import EventsIcon from './assets/icons/EventsIcon';
import SpacesIcon from './assets/icons/SpacesIcon';
import SettingsIcon from './assets/icons/SettingsIcon';

import NewsStackScreen from './routes/NewsStack';
import EventsStackScreen from './routes/EventsStack';
import SpacesStackScreen from './routes/SpacesStack';
import Settings from './components/Settings';

const Tab = createMaterialBottomTabNavigator();

function App() {
  const [barHeight, setBarHeight] = useState(65);
  const {fonts} = useTheme();
  const styles = StyleSheet.create({
    label: {
      fontSize: 10,
      fontFamily: fonts.bold.fontFamily,
      color: '#3D3A37',
    },
  });

  return (
    <Tab.Navigator
      initialRouteName="News"
      activeColor="#3D3A37"
      barStyle={{
        paddingTop: barHeight === 0 ? 0 : 10,
        paddingBottom: barHeight === 0 ? 0 : 10,
        height: barHeight,
        backgroundColor: '#fff',
      }}>
      <Tab.Screen
        name="News"
        // component={NewsStackScreen}
        children={() => <NewsStackScreen setBarHeight={setBarHeight} />}
        options={{
          tabBarLabel: <Text style={styles.label}>News</Text>,
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => <NewsIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Events"
        // component={EventsStackScreen}
        children={() => <EventsStackScreen setBarHeight={setBarHeight} />}
        options={{
          tabBarLabel: <Text style={styles.label}>Events</Text>,
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => <EventsIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Spaces"
        // component={SpacesStackScreen}
        children={() => <SpacesStackScreen setBarHeight={setBarHeight} />}
        options={{
          tabBarLabel: <Text style={styles.label}>Spaces</Text>,
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => <SpacesIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: <Text style={styles.label}>Settings</Text>,
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => <SettingsIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
