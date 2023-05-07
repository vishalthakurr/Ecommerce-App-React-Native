import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const {height, width} = Dimensions.get('window');
const Header = ({
  title,
  leftIcon,
  RightIcon,
  OnClickLeftIcon,
  onClickRightIcon,
}) => {
  const CartItem = useSelector(state => state.cart);
  console.log(JSON.stringify(CartItem.cartdata));
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => (!OnClickLeftIcon ? '' : OnClickLeftIcon())}>
        <Image
          source={leftIcon ? leftIcon : null}
          style={styles.imgleft}></Image>
      </TouchableOpacity>
      <Text style={styles.titlesty}>{title ? title : ''}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={RightIcon ? RightIcon : null}
          style={[styles.imgleft, {width: 40, height: 40}]}
        />
        {CartItem.cartdata.length != 0 && (
          <View style={styles.cartIcon}>
            <Text style={styles.itemvalue}>{CartItem.cartdata.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 65,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imgleft: {
    width: 30,
    height: 30,
  },
  titlesty: {
    color: '#000',
    fontSize: 20,
  },
  cartIcon: {
    width: 23,
    height: 23,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemvalue: {
    fontSize: 15,
  },
});
