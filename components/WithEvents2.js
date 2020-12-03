import React, {useState, useRef} from 'react';
import {View, FlatList, StyleSheet, Animated} from 'react-native';
import {Caption, useTheme, Title, Card} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import AppBar2 from './AppBar2';
import ClockIcon from '../assets/icons/ClockIcon';
import CalenderIcon from '../assets/icons/CalenderIcon';
import PriceIcon from '../assets/icons/PriceIcon';
import Squares from '../assets/Squares';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// const HEADER_MAX_HEIGHT = 90;
// const HEADER_MIN_HEIGHT = 70;
// const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

function WithEvents2({navigation, setBarHeight}) {
  const isFocused = useIsFocused();

  isFocused && setBarHeight(65);

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });

  const titleScale2 = scrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, 45],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, 20 / 2, 20],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

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
      flex: 1,
      backgroundColor: '#fff',
      marginBottom: -50,
    },
    events: {
      backgroundColor: '#fff',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 100,
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
    <Animated.View
      style={[
        styles.eventsPage,
        {transform: [{translateY: headerTranslateY}]},
      ]}>
      <Animated.View>
        <AppBar2
          title="Events"
          subHeading="Latest Events & Activities"
          titleScale={titleScale}
          titleScale2={titleScale2}
        />
      </Animated.View>
      <Animated.View style={styles.events}>
        <AnimatedFlatList
          scrollEventThrottle={16}
          bounces={false}
          data={eventsList}
          // style={{paddingTop: 30}}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
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
      </Animated.View>
    </Animated.View>
  );
}

export default WithEvents2;
