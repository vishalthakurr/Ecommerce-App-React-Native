import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Header from '../common/Header';
import {
  addItemtoCart,
  reduceQtyFromCart,
  deleteItemFromCart,
} from '../redux/slices/CartSlice';

const CartPage = () => {
  const Cart = useSelector(state => state.cart);
  const navigation = useNavigation();
  const [cartItem, setcartItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setcartItem(Cart.data ? Cart.data : []);
  }, [Cart]);

  return (
    <View View style={styles.conatiner}>
      <Header title={'Cart Iteam '} />
      {/* Cart Iteam list */}
      {cartItem.length !== 0 ? (
        <FlatList
          style={styles.ListProduct}
          data={cartItem}
          renderItem={({item, index}) => {
            return (
              <View style={styles.ProductItem}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.navigate('ProductDetail', {data: item});
                  }}>
                  <Image source={{uri: item.image}} style={styles.ItemImage} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.name}>
                    {item.title.length > 25
                      ? item.title.substring(0, 25) + '...'
                      : item.title}
                  </Text>

                  <Text style={styles.desc}>
                    {item.description.length > 30
                      ? item.description.substring(0, 30) + '...'
                      : item.description}
                  </Text>
                  <View style={styles.qtyView}>
                    <Text style={styles.price}>
                      {'$' + Math.round(item.price * item.qty)}
                    </Text>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() =>
                        item.qty > 1
                          ? dispatch(reduceQtyFromCart(item))
                          : dispatch(deleteItemFromCart(index))
                      }>
                      <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyvalue}>{item.qty}</Text>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => dispatch(addItemtoCart(item))}>
                      <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <Text
          style={{
            textAlign: 'center',
            marginTop: 40,
            fontSize: 20,
            fontWeight: '400',
          }}>
          No item in cart
        </Text>
      )}
    </View>
  );
};

export default CartPage;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  ListProduct: {marginBottom: 60},
  ProductItem: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
  },
  ItemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  desc: {
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    color: 'green',
    marginTop: 5,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  qtyvalue: {
    marginLeft: 10,
    fontSize: 18,
  },
  btn: {
    padding: 5,
    borderWidth: 0.5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
});
