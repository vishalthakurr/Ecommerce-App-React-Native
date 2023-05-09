import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Custombutton from '../../common/Custombutton';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Sign up'}</Text>
      <TextInput style={styles.input} placeholder="Enter name" />
      <TextInput style={styles.input} placeholder="Enter Email" />
      <TextInput style={styles.input} placeholder="Enter Mobile" />
      <TextInput style={styles.input} placeholder="Enter password" />
      <TextInput style={styles.input} placeholder="Enter Confirm password" />
      <Custombutton
        bg={'#ff7803'}
        title={'Sign up'}
        color={'#fff'}
        onClick={() => {}}
      />
      <Text style={styles.loginText} onPress={()=>navigation.navigate('Login')}>
        {'Login'}
      </Text>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 40,
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 40,
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 20,
  },
  loginText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 22,
    textDecorationLine: 'underline',
  },
});
