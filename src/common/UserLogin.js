import {View, Text, Modal, StyleSheet, Dimensions, Image ,TouchableOpacity} from 'react-native';
import React from 'react';

const UserLogin = ({modeVisibale, onClickLogin, onClickSignup, onClose}) => {
  return (
    <Modal visible={modeVisibale} transparent animationType='fade'>
      <View style={styles.modelview}>
        <View style={styles.mainView}>
          <TouchableOpacity style={styles.btn} onPress={() => onClickLogin()}>
            <Text style={styles.btntext}>{'Login'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {marginBottom: 20}]}
            onPress={() => onClickSignup()}>
            <Text style={styles.btntext}>{'Create Account'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClose()} style={styles.crosIcon}>
            <Image
              source={require('../img/clear.png')}
              style={styles.clearbtn}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UserLogin;
const styles = StyleSheet.create({
  modelview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: 'gray',
    borderRadius: 10,
    width: '90%',
  },
  btn: {
    width: '80%',
    height: 50,
    backgroundColor: '#ff7803',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    color: '#fff',
    fontSize: 20,
  },
  clearbtn: {
    width: 18,
    height: 18,
  },
  crosIcon:{
    position:'absolute',
    top:10,
    right:10
  }
});
