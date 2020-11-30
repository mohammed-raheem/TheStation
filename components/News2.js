/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable radix */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Dimensions, View, Image} from 'react-native';
import Masonry from 'react-native-infinite-masonry';
import {Caption, useTheme, Title, Card} from 'react-native-paper';

import AppBar from './AppBar';
import CalenderIcon from '../assets/icons/CalenderIcon';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.newsPage}>
        <AppBar title="News" subHeading="Latest News & Articles" />
        <Masonry
          itemsProvider={dataItemProvider}
          renderItem={Item}
          pageSize={10}
        />
      </View>
    </SafeAreaView>
  );
}

const vpWidth = Dimensions.get('window').width;

function Item(dataItem, key) {
  // const {colors, fonts} = useTheme();
  const styles = StyleSheet.create({
    // FIXME: Fix the masonry issue

    news: {
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      // alignItems: 'flex-start',
      // flexWrap: 'wrap',
    },
    newsCard: {
      marginBottom: '3%',
      marginRight: '1%',
      width: '50%',
    },
    cardContent: {
      position: 'absolute',
      bottom: 0,
      left: 15,
      marginBottom: 15,
    },
    cardTitle: {
      color: 'white',
      fontSize: 16,
      // fontFamily: fonts.bold.fontFamily,
      width: 112,
      lineHeight: 20,
      marginBottom: 0,
    },
    cardDate: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardCaption: {
      color: '#fff',
      opacity: 0.7,
      fontSize: 10,
      // fontFamily: fonts.book.fontFamily,
      marginLeft: 5,
    },
  });
  return (
    // <View
    //   key={key}
    //   style={{
    //     ...styles.card,
    //     height: dataItem.height,
    //   }}>
    //   <Image style={styles.img} source={dataItem.image_url} />
    // </View>

    <View style={styles.news} key={key}>
      <Card
        style={styles.newsCard}
        // onPress={() => navigation.navigate('SingleNews')}
      >
        <Image style={styles.cardImage} source={dataItem.image_url} />
        <View style={styles.cardContent}>
          <Title style={styles.cardTitle}>{dataItem.title}</Title>
          <View style={styles.cardDate}>
            <CalenderIcon width="9.72" height="9.07" style={styles.calendar} />
            <Caption style={styles.cardCaption}>{dataItem.date}</Caption>
          </View>
        </View>
      </Card>
    </View>
  );
}

function dataItemProvider(pageSize = 5) {
  const newsList = [
    {
      key: '1',
      title: 'Third Anniversary of TheStation',
      date: '25 Oct 2020',
      imageUrl: require('../assets/images/news-01.jpg'),
    },
    {
      key: '2',
      title: 'power of numbers in design',
      date: '12 Dec 2019',
      imageUrl: require('../assets/images/news-02.jpg'),
    },
    {
      key: '3',
      title: 'power of numbers in design',
      date: '12 Dec 2019',
      imageUrl: require('../assets/images/news-02.jpg'),
    },
    {
      key: '4',
      title: 'Third Anniversary of TheStation',
      date: '25 Oct 2020',
      imageUrl: require('../assets/images/news-01.jpg'),
    },
    {
      key: '5',
      title: 'power of numbers in design',
      date: '12 Dec 2019',
      imageUrl: require('../assets/images/news-01.jpg'),
    },
    {
      key: '6',
      title: 'power of numbers in design',
      date: '12 Dec 2019',
      imageUrl: require('../assets/images/news-02.jpg'),
    },
  ];

  return [...Array(5).keys()].map((i) => {
    return {
      image_url: newsList[i].imageUrl,
      // height: parseInt(Math.max(Math.random() * vpWidth)),
      key: i,
      title: newsList[i].title,
      date: newsList[i].date,
    };
  });
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 24,
  },
  newsPage: {
    // backgroundColor: 'blue',
    // flex: 1,
    // paddingLeft: 24,
    // paddingRight: 24,
  },
  card: {
    margin: 8,
    width: vpWidth * 0.5 - 15,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  img: {
    borderRadius: 5,
    flex: 1,
  },
});
