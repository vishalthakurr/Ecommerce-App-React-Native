import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Home from './Tab/Home';
import Search from './Tab/Search';
import WishList from './Tab/WishList';
import User from './Tab/User';
import Notification from './Tab/Notification';

const HomeScreen = () => {
  const [selectTab, setselectTab] = useState(0);

  return (
    <View style={styles.conatiner}>
      {selectTab == 0 ? (
        <Home />
      ) : selectTab == 1 ? (
        <Search />
      ) : selectTab == 2 ? (
        <WishList />
      ) : selectTab == 3 ? (
        <Notification />
      ) : (
        <User />
      )}

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.bottomtab}
          onPress={() => setselectTab(0)}>
          <Image
            source={
              selectTab == 0
                ? require('../img/homeFill.png')
                : require('../img/home.png')
            }
            style={styles.bottomIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomtab}
          onPress={() => setselectTab(1)}>
          <Image
            source={require('../img/search.png')}
            style={styles.bottomIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomtab}
          onPress={() => setselectTab(2)}>
          <Image
            source={
              selectTab == 2
                ? require('../img/wishlistFill.png')
                : require('../img/wishlist.png')
            }
            style={styles.bottomIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomtab}
          onPress={() => setselectTab(3)}>
          <Image
            source={
              selectTab == 3
                ? require('../img/notiFill.png')
                : require('../img/noti.png')
            }
            style={styles.bottomIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomtab}
          onPress={() => setselectTab(4)}>
          <Image
            source={
              selectTab == 4
                ? require('../img/userFill.png')
                : require('../img/user.png')
            }
            style={styles.bottomIcon}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomtab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
});
