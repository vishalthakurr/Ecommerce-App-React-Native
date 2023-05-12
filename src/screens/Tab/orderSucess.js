import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const OrderSucess = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../../img/checked.png')} />
      <Text style={styles.message}>Order Placed Sucessfully...</Text>
      <Text onPress={() => navigation.navigate('Main')} style={styles.btn}>
        GO To Home
      </Text>
    </View>
  );
};

export default OrderSucess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
  btn: {
    padding: 10,
    borderWidth: 1,
    color: '#000',
    marginTop: 20,
    borderRadius: 10,
  },
});
