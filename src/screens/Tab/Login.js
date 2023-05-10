import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import Custombutton from '../../common/Custombutton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const Loginuser = () => {
    if (email.length !== 0 && password.length !== 0) {
      firestore()
        .collection('Users')
        // Filter results
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          /* ... */
          console.log(querySnapshot.docs[0]._data);
        });
    } else {
      Alert.alert('Please give Email or password for login');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Login'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={txt => setemail(txt)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={txt => setpassword(txt)}
      />

      <Custombutton
        bg={'#ff7803'}
        title={'Login'}
        color={'#fff'}
        onClick={() => {
          Loginuser();
        }}
      />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Signup')}>
        {'Signup'}
      </Text>
    </View>
  );
};

export default Login;
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
