import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {
  Caption,
  useTheme,
  Title,
  Divider,
  Button,
  List,
  Badge,
  Text,
} from 'react-native-paper';

import AppBar from './AppBar';
import NotificationIcon from '../assets/icons/NotificationIcon';
import CalenderIcon from '../assets/icons/CalenderIcon';
import LanguageIcon from '../assets/icons/LanguageIcon';
import AboutIcon from '../assets/icons/AboutIcon';
import ContactIcon from '../assets/icons/ContactIcon';
import LogoutIcon from '../assets/icons/LogoutIcon';

function Settings(props) {
  const {colors, fonts} = useTheme();
  const styles = StyleSheet.create({
    settingsPage: {
      backgroundColor: '#fff',
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
    },
    userDetails: {
      flexDirection: 'row',
      marginBottom: 24,
    },
    userInfo: {
      marginLeft: 30,
    },
    userName: {
      fontFamily: fonts.bold.fontFamily,
      color: '#3D3A37',
      marginBottom: -4,
    },
    userEmail: {
      color: '#818181',
      fontFamily: fonts.book.fontFamily,
      fontSize: 14,
      marginBottom: 5,
    },
    settingTitle: {},
  });

  const settingOptions = [
    {
      key: 1,
      title: 'Notifications',
      icon: <NotificationIcon />,
      badge: <Badge>1</Badge>,
    },
    {
      key: 2,
      title: 'Previous booking',
      icon: <CalenderIcon width="16.47" height="15.24" color="#3D3A37" />,
    },
    {key: 3, title: 'Language', icon: <LanguageIcon />},
    {key: 4, title: 'About the Station', icon: <AboutIcon />},
    {key: 5, title: 'Contact us', icon: <ContactIcon />},
  ];

  return (
    <View style={styles.settingsPage}>
      <AppBar title="Menu & Profile" />

      <View>
        <View style={styles.userDetails}>
          <Image source={require('../assets/images/profileImage.jpg')} />
          <View style={styles.userInfo}>
            <Title style={styles.userName}>Ali Hamandi</Title>
            <Caption style={styles.userEmail}>Hamandi@solostudio.co</Caption>
            <Button
              mode="text"
              uppercase={false}
              labelStyle={{
                fontFamily: fonts.book.fontFamily,
                color: '#404040',
                marginLeft: 0,
              }}
              style={{alignSelf: 'flex-start'}}
              onPress={() => console.log('edit profile')}>
              Edit Profile
            </Button>
          </View>
        </View>
      </View>
      <Divider style={{backgroundColor: '#ECECEC'}} />
      {/* FIXME: Fix the alignment of titles */}
      <View style={{marginTop: 25}}>
        {settingOptions.map((item) => (
          <List.Item
            key={item.key}
            title={
              item.badge ? (
                <Text>
                  {item.title} {/* FIXME: Fix the notifications badge */}
                  {/* <Badge
                    style={{backgroundColor: colors.primary,}}>
                    1
                  </Badge> */}
                </Text>
              ) : (
                item.title
              )
            }
            left={() => item.icon}
            onPress={() => console.log('Setting item Pressed')}
            style={{marginBottom: 30}}
            titleStyle={{
              color: '#2B2B2B',
              fontFamily: fonts.book.fontFamily,
              marginTop: -8,
              marginBottom: -8,
            }}
          />
        ))}
      </View>
      <Divider style={{backgroundColor: '#ECECEC'}} />
      <View key="1">
        <List.Item
          title={'Log out'}
          left={() => <LogoutIcon />}
          onPress={() => console.log('Log out')}
          style={{marginTop: 16}}
          titleStyle={{
            color: '#FF0F35',
            fontFamily: fonts.book.fontFamily,
            marginTop: -8,
            marginBottom: -8,
            alignSelf: 'flex-start',
          }}
        />
      </View>
    </View>
  );
}

export default Settings;
