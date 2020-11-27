import React, {useState, useRef} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native';
import {Caption, useTheme, Title, Card} from 'react-native-paper';

import AppBar from './AppBar';
import CalenderIcon from '../assets/icons/CalenderIcon';

function News({navigation}) {
  const [newsList, setNewsList] = useState([
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
      imageUrl: require('../assets/images/news-01.jpg'),
    },
    {
      key: '3',
      title: 'power of numbers in design',
      date: '12 Dec 2019',
      imageUrl: require('../assets/images/news-01.jpg'),
    },
    {
      key: '4',
      title: 'Third Anniversary of TheStation',
      date: '25 Oct 2020',
      imageUrl: require('../assets/images/news-01.jpg'),
    },
    {
      key: '3',
      title: 'power of numbers in design',
      date: '12 Dec 2019',
      imageUrl: require('../assets/images/news-01.jpg'),
    },
    {
      key: '3',
      title: 'power of numbers in design',
      date: '12 Dec 2019',
      imageUrl: require('../assets/images/news-01.jpg'),
    },
  ]);

  const {colors, fonts} = useTheme();
  const styles = StyleSheet.create({
    // FIXME: Fix the masonry issue
    newsPage: {
      backgroundColor: 'white',
      flex: 1,
      paddingLeft: 24,
      paddingRight: 24,
    },
    news: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    newsCard: {
      marginBottom: 15,
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
      fontFamily: fonts.bold.fontFamily,
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
      fontFamily: fonts.book.fontFamily,
      marginLeft: 5,
    },
  });

  return (
    <View style={styles.newsPage}>
      <AppBar title="News" subHeading="Latest News & Articles" />

      <FlatList
        columnWrapperStyle={styles.news}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={newsList}
        renderItem={({item}) => (
          <Card
            style={styles.newsCard}
            onPress={() => navigation.navigate('SingleNews')}>
            <Image style={styles.cardImage} source={item.imageUrl} />
            <View style={styles.cardContent}>
              <Title style={styles.cardTitle}>{item.title}</Title>
              <View style={styles.cardDate}>
                <CalenderIcon
                  width="9.72"
                  height="9.07"
                  style={styles.calendar}
                />
                <Caption style={styles.cardCaption}>{item.date}</Caption>
              </View>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

export default News;
