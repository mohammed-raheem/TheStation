import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';
import {Caption, useTheme, Title, Paragraph} from 'react-native-paper';

import ArrowIcon from '../assets/ArrowIcon';
import ShareIcon from '../assets/ShareIcon';
import CalenderIcon from '../assets/CalenderIcon';
import UserIcon from '../assets/UserIcon';

function SingleNews({navigation}) {
  const {colors, fonts} = useTheme();
  const styles = StyleSheet.create({
    singleNewsPage: {
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
      marginBottom: 39,
    },
    dateContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: 14,
      left: 24,
    },
    date: {
      color: '#fff',
      opacity: 0.7,
      fontSize: 10,
      fontFamily: fonts.book.fontFamily,
      marginLeft: 5,
    },
    userContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: 14,
      left: 144.4,
    },
    userName: {
      color: '#fff',
      opacity: 0.7,
      fontSize: 10,
      fontFamily: fonts.book.fontFamily,
      marginLeft: 5,
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
  });

  return (
    <ScrollView>
      <View style={styles.singleNewsPage}>
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
            Third Anniversary of The Station
          </Title>
          <View style={styles.dateContainer}>
            <CalenderIcon width="9.72" height="9.07" style={styles.calendar} />
            <Caption style={styles.date}>25 Oct 2020</Caption>
          </View>
          <View style={styles.userContainer}>
            <UserIcon style={styles.calendar} />
            <Caption style={styles.userName}>Bilal Al-Aqidi</Caption>
          </View>
        </View>
        <View style={styles.eventBody}>
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
          <Title style={styles.bodyTitle}>Complete Account Of The System</Title>
          <Paragraph style={styles.bodyText}>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
            Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
            quiz. How quickly daft jumping zebras vex. Two driven jocks help fax
            my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz
            Jack!" my brave ghost
          </Paragraph>
          <Image
            style={{marginBottom: 10}}
            source={require('../assets/images/news-hall.jpg')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default SingleNews;
