import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import NewsIcon from './assets/NewsIcon';
import EventsIcon from './assets/EventsIcon';
import SpacesIcon from './assets/SpacesIcon';
import SettingsIcon from './assets/SettingsIcon';

import NewsStackScreen from './routes/NewsStack';
import EventsStackScreen from './routes/EventsStack';
import SpacesStackScreen from './routes/SpacesStack';
import Settings from './components/Settings';

const Tab = createMaterialBottomTabNavigator();

function App() {
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
      barStyle={{paddingTop: 10, paddingBottom: 10}}>
      <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
          tabBarLabel: <Text style={styles.label}>News</Text>,
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => <NewsIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsStackScreen}
        options={{
          tabBarLabel: <Text style={styles.label}>Events</Text>,
          tabBarColor: '#fff',
          tabBarIcon: ({color}) => <EventsIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Spaces"
        component={SpacesStackScreen}
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
