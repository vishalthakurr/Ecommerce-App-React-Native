import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import Custombutton from '../../common/Custombutton';
import {useDispatch} from 'react-redux';
import {addAddress} from '../../redux/slices/AddAddesssSlice';

const AddAddress = () => {
  const navigation = useNavigation();
  const [type, settype] = useState(1);
  const [state, setstate] = useState('');
  const [city, setcity] = useState('');
  const [pincode, setpincode] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={styles.conatiner}>
      <Header
        leftIcon={require('../../img/back.png')}
        OnClickLeftIcon={() => navigation.goBack()}
        title={'Add New Address'}
      />
      <TextInput
        placeholder="Enter State"
        value={state}
        onChangeText={txt => setstate(txt)}
        style={[styles.input, {marginTop: 50}]}
      />
      <TextInput
        placeholder="Enter City"
        value={city}
        onChangeText={txt => setcity(txt)}
        style={[styles.input, {marginTop: 15}]}
      />
      <TextInput
        keyboardType="number-pad"
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={txt => setpincode(txt)}
        style={[styles.input, {marginTop: 15}]}
      />
      <View style={styles.typeview}>
        <TouchableOpacity
          style={[
            styles.typebtn,
            {borderWidth: 0.5, borderColor: type === 1 ? 'orange' : 'black'},
          ]}
          onPress={() => settype(1)}>
          <Image
            style={{
              width: 24,
              height: 24,
              tintColor: type === 1 ? 'orange' : 'black',
            }}
            source={
              type === 1
                ? require('../../img/radio.png')
                : require('../../img/radio1.png')
            }
          />
          <Text style={styles.radioText}>{'Home'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => settype(2)}
          style={[
            styles.typebtn,
            {borderWidth: 0.5, borderColor: type === 2 ? 'orange' : 'black'},
          ]}>
          <Image
            style={{
              width: 24,
              height: 24,
              tintColor: type === 2 ? 'orange' : 'black',
            }}
            source={
              type === 2
                ? require('../../img/radio.png')
                : require('../../img/radio1.png')
            }
          />
          <Text style={styles.radioText}>{'Office'}</Text>
        </TouchableOpacity>
      </View>
      <Custombutton
        bg={'#FE9000'}
        title={'Save Address'}
        color={'#fff'}
        onClick={() =>
          dispatch(
            addAddress({
              state,
              city,
              pincode,
              type: type == 1 ? 'Home' : 'Office',
            }),
            navigation.goBack(),
          )
        }
      />
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  conatiner: {flex: 1, backgroundColor: '#fff'},
  input: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.3,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  typeview: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  typebtn: {
    width: '40%',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  radioText: {
    marginLeft: 10,
  },
});
