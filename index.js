import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry, StatusBar} from 'react-native';
// import RootViewBackgroundColor from 'react-native-root-view-background-color';
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

export default function Main() {
  // RootViewBackgroundColor.setBackground(255, 255, 255, 1);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
