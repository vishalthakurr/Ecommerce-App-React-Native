import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../common/Header';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const AddressScreen = () => {
  const navigation = useNavigation();
  const myAddressList = useSelector(state => state.address);
  const isfocused = useIsFocused();
  useEffect(() => {
    console.log(myAddressList.data);
  }, [isfocused]);

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
          return <Text>{item.city}</Text>;
        }}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          navigation.navigate('AddAddress');
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
});
