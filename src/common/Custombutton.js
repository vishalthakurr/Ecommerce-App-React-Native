import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';

const Custombutton = ({bg, title, color, onClick}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: bg}]}
      onPress={() => onClick()}>
      <Text
        style={{
          color: color,
          textAlign: 'center',
          fontSize: 25,
          fontWeight: '400',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Custombutton;
const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get('window').width - 40,
    height: 53,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});
