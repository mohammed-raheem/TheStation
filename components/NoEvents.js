import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Caption, useTheme, Title, Button} from 'react-native-paper';

import AppBar from './AppBar';
import EventsBox from '../assets/EventsBox';
import GridBg from '../assets/GridBg';

function NoEvents() {
  const {colors, fonts} = useTheme();
  const styles = StyleSheet.create({
    noEventsPage: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 20,
      paddingRight: 20,
    },
    container: {
      flex: 1,
    },
    content: {
      alignItems: 'center',
      marginTop: 125,
    },
    gridBg: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    title: {
      fontFamily: fonts.bold.fontFamily,
      color: '#3D3A37',
      marginTop: 15,
      marginBottom: 5,
    },
    caption: {
      fontSize: 14,
      fontFamily: fonts.book.fontFamily,
      lineHeight: 18,
      opacity: 0.5,
      color: colors.titleColor,
      width: '68%',
      textAlign: 'center',
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.noEventsPage}>
      <AppBar title="Events" subHeading="Latest Events & Activities" />
      <View style={styles.container}>
        <View style={styles.content}>
          <EventsBox />
          <Title style={styles.title}>No events yet!</Title>
          <Caption style={styles.caption}>
            We'll notify you once we have new events for you
          </Caption>
          <Button
            uppercase={false}
            labelStyle={{fontFamily: fonts.book.fontFamily}}
            mode="text"
            onPress={() => console.log('Pressed')}>
            Come back later
          </Button>
        </View>
        <View style={styles.gridBg}>
          <GridBg />
        </View>
      </View>
    </View>
  );
}

export default NoEvents;
