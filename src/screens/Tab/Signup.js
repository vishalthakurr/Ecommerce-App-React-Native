import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React,{useState} from 'react';
import Custombutton from '../../common/Custombutton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
const Signup = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const Adduser = () => {
    if (
      name.length !== 0 &&
      email.length !== 0 &&
      mobile.length !== 0 &&
      password.length !== 0 &&
      cpassword.length !== 0
    ) {
      firestore()
        .collection('Users')
        .add({
          name: name,
          email: email,
          mobile: mobile,
          email: email,
          cpassword: cpassword,
        })
        .then(() => {
          console.log('User added!');
          navigation.navigate('Login');
          // setname('');
          // setemail('');
          // setmobile('');
          // setpassword('');
          // setcpassword('');
        })
        .catch(() => {
          Alert.alert('Something went wrong ! please try agian later.');
        });
    } else {
      Alert.alert('Please fill the detail.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Sign up'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={txt => setname(txt)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={txt => setemail(txt)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile"
        value={mobile}
        onChangeText={txt => setmobile(txt)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={txt => setpassword(txt)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Confirm password"
        value={cpassword}
        onChangeText={txt => setcpassword(txt)}
      />
      <Custombutton
        bg={'#ff7803'}
        title={'Sign up'}
        color={'#fff'}
        onClick={() => {
          Adduser();
        }}
      />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
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
