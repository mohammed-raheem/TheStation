import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import {Caption, useTheme, Title, Card, Text} from 'react-native-paper';

import AppBar from './AppBar';
import WifiIcon from '../assets/icons/WifiIcon';
import DatashowIcon from '../assets/icons/DatashowIcon';
import BoardIcon from '../assets/icons/BoardIcon';
import AudioIcon from '../assets/icons/AudioIcon';
import CoolingIcon from '../assets/icons/CoolingIcon';
import ChairIcon from '../assets/icons/ChairIcon';
import StageIcon from '../assets/icons/StageIcon';
import PersonIcon from '../assets/icons/PersonIcon';

function Spaces({navigation, setBarHeight}) {
  const {colors, fonts} = useTheme();
  const [spacesList, setSpacesList] = useState([
    {
      key: '1',
      roomName: 'Hall',
      price: '2,000,000 IQD',
      imageUrl: require('../assets/images/main-hall.jpg'),
      wifi: true,
      datashow: true,
      board: true,
      audio: true,
      cooling: true,
      chairs: true,
      stage: true,
      personsNumber: 250,
    },
    {
      key: '2',
      roomName: 'A',
      price: '60,000 IQD',
      imageUrl: require('../assets/images/room-a.jpg'),
      wifi: true,
      datashow: true,
      board: true,
      audio: true,
      cooling: true,
      chairs: true,
      stage: false,
      personsNumber: 35,
    },
    {
      key: '3',
      roomName: 'B',
      price: '30,000 IQD',
      imageUrl: require('../assets/images/room-b.jpg'),
      wifi: true,
      datashow: true,
      board: true,
      audio: false,
      cooling: true,
      chairs: true,
      stage: false,
      personsNumber: 15,
    },
    {
      key: '4',
      roomName: 'C',
      price: '12,000 IQD',
      imageUrl: require('../assets/images/room-c.jpg'),
      wifi: true,
      datashow: true,
      board: true,
      audio: false,
      cooling: true,
      chairs: false,
      stage: false,
      personsNumber: 6,
    },
    {
      key: '5',
      roomName: 'D',
      price: '12,000 IQD',
      imageUrl: require('../assets/images/room-d.jpg'),
      wifi: true,
      datashow: false,
      board: true,
      audio: false,
      cooling: true,
      chairs: false,
      stage: false,
      personsNumber: 6,
    },
  ]);
  const styles = StyleSheet.create({
    spacesPage: {
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
    roomFigure: {
      position: 'absolute',
      bottom: 48,
      right: 0,
    },
    roomBg: {
      backgroundColor: colors.primary,
      width: 74,
      height: 49.3,
    },
    roomName: {
      backgroundColor: '#fff',
      width: 49.74,
      height: 49.74,
      position: 'absolute',
      bottom: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    room: {
      fontFamily: fonts.bold.fontFamily,
      fontSize: 20,
      color: '#424243',
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 6,
      marginBottom: -10,
    },
    price: {
      fontSize: 16,
      fontFamily: fonts.bold.fontFamily,
      color: colors.titleColor,
    },
    icons: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
    icon: {
      marginLeft: 8,
    },
    capacityContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    capacity: {
      color: '#CCCCCC',
      fontFamily: fonts.book.fontFamily,
      fontSize: 9,
      marginBottom: 5,
      marginRight: 1,
    },
  });

  return (
    <View style={styles.spacesPage}>
      <AppBar title="Spaces" subHeading="All Spaces & Services" />
      <FlatList
        data={spacesList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Card
            style={styles.cardContainer}
            onPress={() => {
              navigation.navigate('Room');
              setBarHeight(0);
            }}>
            <Card.Cover source={item.imageUrl} />
            <View style={styles.roomFigure}>
              <View style={styles.roomBg}></View>
              <View style={styles.roomName}>
                <Text style={styles.room}>{item.roomName}</Text>
              </View>
            </View>
            <Card.Content style={styles.cardContent}>
              <Title style={styles.price}>{item.price}</Title>
              <View style={styles.icons}>
                {item.wifi ? <WifiIcon style={styles.icon} /> : null}
                {item.datashow ? <DatashowIcon style={styles.icon} /> : null}
                {item.board ? <BoardIcon style={styles.icon} /> : null}
                {item.audio ? <AudioIcon style={styles.icon} /> : null}
                {item.cooling ? <CoolingIcon style={styles.icon} /> : null}
                {item.chairs ? <ChairIcon style={styles.icon} /> : null}
                {item.stage ? <StageIcon style={styles.icon} /> : null}
                {item.personsNumber ? (
                  <View style={styles.capacityContent}>
                    <Caption style={styles.capacity}>
                      {item.personsNumber}x
                    </Caption>
                    <PersonIcon style={styles.personIcon} />
                  </View>
                ) : null}
              </View>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

export default Spaces;
