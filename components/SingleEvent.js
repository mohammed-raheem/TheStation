import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';
import {
  Caption,
  useTheme,
  Title,
  Card,
  Paragraph,
  Button,
} from 'react-native-paper';

import ArrowIcon from '../assets/icons/ArrowIcon';
import ShareIcon from '../assets/icons/ShareIcon';
import ClockIcon from '../assets/icons/ClockIcon';
import CalenderIcon from '../assets/icons/CalenderIcon';
import PriceIcon from '../assets/icons/PriceIcon';
import SingleEventVector from '../assets/SingleEventVector';

function SingleEvent({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = StyleSheet.create({
    singleEventPage: {
      backgroundColor: '#fff',
      flex: 1,
    },
    headerBg: {
      width: '100%',
    },
    arrowIcon: {
      position: 'absolute',
      top: 34,
      left: 24,
      width: 40,
      height: 40,
    },
    shareIcon: {
      position: 'absolute',
      top: 34,
      right: 24,
    },
    headerTitle: {
      position: 'absolute',
      bottom: 0,
      left: 24,
      color: '#fff',
      width: 308,
      fontFamily: fonts.bold.fontFamily,
      lineHeight: 32,
      fontSize: 25,
      marginBottom: 25,
    },
    cardContainer: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      elevation: 4,
      height: 49.25,
    },
    captionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    caption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 8,
    },
    captionText: {
      marginLeft: 4,
      marginTop: 0,
    },
    squares: {
      position: 'absolute',
      right: 0,
      bottom: 0,
    },
    eventBody: {
      marginTop: 20,
      marginLeft: 18,
      marginRight: 18,
    },
    bodyTitle: {
      fontFamily: fonts.bold.fontFamily,
      fontSize: 25,
      color: colors.titleColor,
      marginBottom: 15,
    },
    bodyText: {
      fontFamily: fonts.book.fontFamily,
      fontSize: 14,
      color: colors.titleColor,
      opacity: 0.7,
      marginBottom: 40,
      lineHeight: 22,
    },
    btnFree: {
      fontFamily: fonts.book.fontFamily,
      color: '#000',
      fontSize: 10,
    },
  });

  return (
    <ScrollView>
      <View style={styles.singleEventPage}>
        <View style={styles.header}>
          <Image
            style={styles.headerBg}
            source={require('../assets/images/single-event-bg.jpg')}
          />
          <TouchableOpacity
            style={styles.arrowIcon}
            onPress={() => navigation.goBack()}>
            <ArrowIcon />
          </TouchableOpacity>
          <View style={styles.shareIcon}>
            <ShareIcon />
          </View>
          <Title style={styles.headerTitle}>
            Winvestor:{'\n'}The Pitch Competition
          </Title>
        </View>
        <Card style={styles.cardContainer}>
          <Card.Content style={styles.captionContainer}>
            <View style={styles.caption}>
              <ClockIcon />
              <Caption style={styles.captionText}>05:00 PM</Caption>
            </View>
            <View style={styles.caption}>
              <CalenderIcon width="10" height="9.25" color="#4C4C4C" />
              <Caption style={styles.captionText}>12 Dec 2019</Caption>
            </View>
            <View style={styles.caption}>
              <PriceIcon />
              <Caption style={styles.captionText}>Free</Caption>
            </View>
          </Card.Content>
          <View style={styles.squares}>
            <SingleEventVector />
          </View>
        </Card>
        <View style={styles.eventBody}>
          <Title style={styles.bodyTitle}>Must Explain To You How</Title>
          <Paragraph style={styles.bodyText}>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires
          </Paragraph>
          <Button
            mode="contained"
            uppercase={false}
            style={{height: 48, marginBottom: 35, justifyContent: 'center'}}
            labelStyle={{
              fontFamily: fonts.bold.fontFamily,
              color: '#3D3A37',
              fontSize: 16,
            }}
            onPress={() => console.log('Pressed')}>
            Book now - <Caption style={styles.btnFree}>free</Caption>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default SingleEvent;
