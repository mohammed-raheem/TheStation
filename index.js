import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
