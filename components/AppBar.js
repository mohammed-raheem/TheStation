import * as React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {Title, Subheading} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {useTheme} from 'react-native-paper';

const AppBar = (props) => {
  // const [branch, setBranch] = React.useState('Baghdad');
  const {colors, fonts} = useTheme();

  const styles = StyleSheet.create({
    appBar: {
      paddingTop: 20,
      backgroundColor: '#fff',
      marginBottom: 20,
    },
    title: {
      color: colors.titleColor,
      fontFamily: fonts.bold.fontFamily,
      fontSize: 24,
      marginBottom: 6,
    },
    subHeading: {
      color: '#D1D1D1',
      fontFamily: fonts.bold.fontFamily,
      fontSize: 18,
      marginTop: 0,
    },
    // branchPicker: {
    //   width: 140,
    // },
  });

  return (
    <View style={styles.appBar}>
      <View style={styles.titleBox}>
        <Title style={styles.title}>{props.title}</Title>
        {props.subHeading ? (
          <Subheading style={styles.subHeading}>{props.subHeading}</Subheading>
        ) : null}
      </View>

      {/* FIXME: Fix this Picker */}
      {/* <View style={styles.branchPicker}>
        <Caption>Location</Caption>
        <RNPickerSelect
          onValueChange={(value) => setBranch(value)}
          items={[
            {label: 'Baghdad', value: 'baghdad'},
            {label: 'Mosul', value: 'mosul'},
          ]}
          placeholder={{}}
          value={branch}
        />
      </View> */}
    </View>
  );
};

export default AppBar;
