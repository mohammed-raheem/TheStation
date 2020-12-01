import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import {Caption, useTheme, Title, Card} from 'react-native-paper';

import AppBar from './AppBar';
import ClockIcon from '../assets/icons/ClockIcon';
import CalenderIcon from '../assets/icons/CalenderIcon';
import PriceIcon from '../assets/icons/PriceIcon';
import Squares from '../assets/Squares';

function WithEvents({navigation, setBarHeight}) {
  const [eventsList, setEventsList] = useState([
    {
      key: '1',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '2',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '3',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '4',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '5',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
    {
      key: '6',
      title: 'Winvestor: The Pitch Competition ',
      date: '12 Dec 2019',
      time: '05:00 PM',
      imageUrl: require('../assets/images/eventImage.jpg'),
      price: 'Free',
    },
  ]);
  const {colors, fonts} = useTheme();
  const styles = StyleSheet.create({
    eventsPage: {
      backgroundColor: '#fff',
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
    },
    cardContainer: {
      marginBottom: 24,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      elevation: 4,
    },
    cardTitle: {
      fontSize: 16,
      fontFamily: fonts.bold.fontFamily,
      color: colors.titleColor,
      marginTop: 5,
      marginBottom: -2,
    },
    captionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    caption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 8,
    },
    captionText: {
      marginLeft: 4,
    },
    squares: {
      position: 'absolute',
      right: 0,
      bottom: 0,
    },
  });

  return (
    <View style={styles.eventsPage}>
      <AppBar title="Events" subHeading="Latest Events & Activities" />
      <FlatList
        data={eventsList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Card
            style={styles.cardContainer}
            onPress={() => {
              navigation.navigate('SingleEvent');
              setBarHeight(0);
            }}>
            <Card.Cover source={item.imageUrl} />
            <Card.Content>
              <Title style={styles.cardTitle}>{item.title}</Title>
              <View style={styles.captionContainer}>
                <View style={styles.caption}>
                  <ClockIcon />
                  <Caption style={styles.captionText}>{item.time}</Caption>
                </View>
                <View style={styles.caption}>
                  <CalenderIcon width="10" height="9.25" color="#4C4C4C" />
                  <Caption style={styles.captionText}>{item.date}</Caption>
                </View>
                <View style={styles.caption}>
                  <PriceIcon />
                  <Caption style={styles.captionText}>{item.price}</Caption>
                </View>
              </View>
            </Card.Content>
            <View style={styles.squares}>
              <Squares />
            </View>
          </Card>
        )}
      />
    </View>
  );
}

export default WithEvents;
