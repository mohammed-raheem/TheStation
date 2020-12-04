import React, {useContext} from 'react';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import {LogBox, StatusBar, TouchableHighlight} from 'react-native';
LogBox.ignoreAllLogs();
import {
  Image,
  View,
  Dimensions,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {Caption, Title, Card} from 'react-native-paper';
import Masonry from 'react-native-masonry-layout';

import AppBar from './AppBar';
import CalenderIcon from '../assets/icons/CalenderIcon';

const {width} = Dimensions.get('window');
const columnWidth = (width - 10) / 2 - 10;

export default class News3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      withHeight: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.load();
  }

  load() {
    this.setState({loading: true});
    const newsList = [
      {
        key: nanoid(),
        title: 'Third Anniversary of TheStation',
        date: '25 Oct 2020',
        cardImage: require('../assets/images/news-01.jpg'),
      },
      {
        key: nanoid(),
        title: 'Third Anniversary of TheStation',
        date: '25 Oct 2020',
        cardImage: require('../assets/images/news-02.jpg'),
      },
      {
        key: nanoid(),
        title: 'Third Anniversary of TheStation',
        date: '25 Oct 2020',
        cardImage: require('../assets/images/news-02.jpg'),
      },
      {
        key: nanoid(),
        title: 'Third Anniversary of TheStation',
        date: '25 Oct 2020',
        cardImage: require('../assets/images/news-02.jpg'),
      },
      {
        key: nanoid(),
        title: 'Third Anniversary of TheStation',
        date: '25 Oct 2020',
        cardImage: require('../assets/images/news-01.jpg'),
      },
      {
        key: nanoid(),
        title: 'Third Anniversary of TheStation',
        date: '25 Oct 2020',
        cardImage: require('../assets/images/news-01.jpg'),
      },
      {
        key: nanoid(),
        title: 'Third Anniversary of TheStation',
        date: '25 Oct 2020',
        cardImage: require('../assets/images/news-02.jpg'),
      },
    ];

    const data = newsList.map((item) => {
      return {
        image: item.cardImage,
        title: item.title,
        date: item.date,
        key: item.key,
        // height: (columnWidth / item.file.width) * item.file.height,
      };
    });

    if (this.state.withHeight) {
      this.refs.list.addItemsWithHeight(data);
    } else {
      this.refs.list.addItems(data);
    }
  }

  onScrollEnd(event) {
    const scrollHeight = Math.floor(
      event.nativeEvent.contentOffset.y +
        event.nativeEvent.layoutMeasurement.height,
    );
    const height = Math.floor(event.nativeEvent.contentSize.height);
    if (scrollHeight >= height) {
      this.load();
    }
  }

  render() {
    const {isFocused} = this.props;
    isFocused && this.props.setBarHeight(65);
    const styles = StyleSheet.create({
      // FIXME: Fix the masonry issue
      newsPage: {
        backgroundColor: 'white',
        flex: 1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
      },
      newsCard: {
        marginBottom: 10,

        width: '95%',
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
      <View style={styles.newsPage}>
        <AppBar title="News" subHeading="Latest News & Articles" />
        <Masonry
          onMomentumScrollEnd={this.onScrollEnd.bind(this)}
          style={{flex: 1}}
          columns={2}
          showsVerticalScrollIndicator={false}
          ref="list"
          containerStyle={{justifyContent: 'space-between'}}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
              tintColor="#ff0000"
              title="Loading..."
              titleColor="#00ff00"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#fff"
            />
          }
          renderItem={(item) => (
            <TouchableHighlight
              style={styles.newsCard}
              onPress={() => {
                this.props.navigation.navigate('SingleNews');
                this.props.setBarHeight(0);
              }}>
              <Card>
                <Image style={{width: '100%'}} source={item.image} />
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
            </TouchableHighlight>
          )}
        />

        {/* {this.state.loading && (
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                backgroundColor: '#fff',
                paddingVertical: 20,
                paddingHorizontal: 30,
                borderRadius: 10,
              }}>
              加载中
            </Text>
          </View>
        )} */}
      </View>
    );
  }
}
