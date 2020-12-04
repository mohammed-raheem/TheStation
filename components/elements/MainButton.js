import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Caption, useTheme, Text} from 'react-native-paper';

function MainButton(props) {
  const {colors, fonts} = useTheme();
  const styles = StyleSheet.create({
    Btn: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      height: 55,
      marginBottom: 25,
    },
    btnTitle: {
      fontFamily: fonts.bold.fontFamily,
      color: '#3D3A37',
      fontSize: 16,
      // marginRight: 5,
    },
    btnSubTitle: {
      fontFamily: fonts.book.fontFamily,
      color: '#000',
      fontSize: 10,
    },
  });
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.9 : 1,
          shadowColor: pressed ? '#000' : '#000',
          shadowOffset: pressed ? {width: 0, height: 3} : {width: 0, height: 1},
          shadowOpacity: pressed ? 0.27 : 0.22,
          shadowRadius: pressed ? 4.56 : 2.22,
          elevation: pressed ? 9 : 3,
        },
        styles.Btn,
      ]}
      onPress={props.onPress}>
      <Text style={styles.btnTitle}>{props.title}</Text>
      {props.subTitle ? (
        <Caption style={styles.btnSubTitle}>{props.subTitle}</Caption>
      ) : null}
    </Pressable>
  );
}

export default MainButton;
