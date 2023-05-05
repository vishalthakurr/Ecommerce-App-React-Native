import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const Header = ({
  title,
  leftIcon,
  RightIcon,
  OnClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={() => OnClickLeftIcon()}>
        <Image source={leftIcon} style={styles.imgleft}></Image>
      </TouchableOpacity>
      <Text style={styles.titlesty}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={RightIcon}
          style={[styles.imgleft, {width: 40, height: 40}]}></Image>
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 65,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imgleft: {
    width: 30,
    height: 30,
  },
  titlesty: {
    color: '#000',
    fontSize: 20,
  },
});
