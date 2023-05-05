import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()
  return (
    <View View style={styles.conatiner}>
      <Header
        leftIcon={require('../../img/menu.png')}
        RightIcon={require('../../img/cart.png')}
        title={'Grocery App'}
        OnClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
