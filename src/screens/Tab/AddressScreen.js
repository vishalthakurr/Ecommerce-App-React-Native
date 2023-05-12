import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../common/Header';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deleteAddress} from '../../redux/slices/AddAddesssSlice';

const AddressScreen = () => {
  const navigation = useNavigation();
  const myAddressList = useSelector(state => state.address);
  const isfocused = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(myAddressList.data);
  }, [isfocused]);

  const defaultAddress = async item => {
    await AsyncStorage.setItem(
      'My_address',
      '' +
        item.city +
        ',' +
        item.state +
        ',' +
        item.pincode +
        ',type:' +
        item.type,
    );
    navigation.goBack();
  };
  return (
    <View style={styles.conatiner}>
      <Header
        leftIcon={require('../../img/back.png')}
        OnClickLeftIcon={() => navigation.goBack()}
        title={'My Addresses'}
      />
      <FlatList
        data={myAddressList.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.AddList}
              onPress={() => defaultAddress(item)}>
              <Text style={styles.statetext}>{`State: ${item.state}`}</Text>
              <Text style={styles.statetext}>{`City: ${item.city}`}</Text>
              <Text style={styles.statetext}>{`Pincode: ${item.pincode}`}</Text>
              <Text style={[styles.statetext, styles.stateType]}>
                {item.type}
              </Text>
              <View style={styles.bottomView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddAddress', {
                      type: 'edit',
                      data: item,
                    });
                  }}
                  style={[styles.bottomicon, {marginRight: 10}]}>
                  <Image
                    style={styles.bottomicon}
                    source={require('../../img/edit.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => dispatch(deleteAddress(item.id))}>
                  <Image
                    style={styles.bottomicon}
                    source={require('../../img/delete.png')}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          navigation.navigate('AddAddress', {type: 'new'});
        }}>
        <Text style={{fontSize: 30, color: '#fff'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  conatiner: {flex: 1, backgroundColor: '#fff'},
  addBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 25,
    position: 'absolute',
    bottom: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddList: {
    width: '90%',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  statetext: {
    fontSize: 18,
    color: '#000',
  },
  stateType: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#B1BFF5',
    padding: 5,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: '600',
  },
  bottomView: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'row',
  },
  bottomicon: {
    width: 24,
    height: 24,
  },
});
