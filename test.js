import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {AppRegistry} from 'react-native';
import {
  DefaultTheme,
  configureFonts,
  Provider as PaperProvider,
} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './App';

const fontConfig = {
  default: {
    bold: {
      fontFamily: 'CircularStd-Bold',
    },
    medium: {
      fontFamily: 'CircularStd-Medium',
    },
    book: {
      fontFamily: 'CircularStd-Book',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#F9EF0D',
    titleColor: '#212121',
  },
};

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
