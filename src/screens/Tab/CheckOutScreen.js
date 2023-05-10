import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemtoCart,
  deleteItemFromCart,
  reduceQtyFromCart,
} from '../../redux/slices/CartSlice';
import Custombutton from '../../common/Custombutton';

const CheckOutScreen = () => {
  const navigation = useNavigation();
  const Cart = useSelector(state => state.cart);
  const [cartItem, setcartItem] = useState([]);
  const [paymentSelect, setpaymentSelect] = useState(0);
  const [selectAddress, setselectAddress] = useState(
    'Please Select the Address',
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setcartItem(Cart.data ? Cart.data : []);
  }, [Cart]);

  const getTotal = () => {
    let total = 0;
    cartItem.map(item => {
      total += item.qty * item.price;
    });
    return total.toFixed(0);
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../img/back.png')}
        title={'Checkout'}
        OnClickLeftIcon={() => navigation.goBack()}
      />
      <Text style={styles.title}>Added items</Text>
      <FlatList
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

      <View style={styles.totalView}>
        <Text style={styles.title}>{`Total (item ${cartItem.length})`}</Text>
        <Text style={[styles.title, {marginRight: 20}]}>
          {'$' + getTotal()}
        </Text>
      </View>
      <Text style={styles.title}>Select Payment Mode</Text>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setpaymentSelect(0)}>
        <Image
          style={[
            styles.radioNon,
            {tintColor: paymentSelect === 0 ? 'orange' : 'black'},
          ]}
          source={
            paymentSelect === 0
              ? require('../../img/radio.png')
              : require('../../img/radio1.png')
          }
        />
        <Text style={styles.paymentMethodText}>Credit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setpaymentSelect(1)}>
        <Image
          style={[
            styles.radioNon,
            {tintColor: paymentSelect === 1 ? 'orange' : 'black'},
          ]}
          source={
            paymentSelect === 1
              ? require('../../img/radio.png')
              : require('../../img/radio1.png')
          }
        />
        <Text style={styles.paymentMethodText}>Debit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setpaymentSelect(2)}>
        <Image
          style={[
            styles.radioNon,
            {tintColor: paymentSelect === 2 ? 'orange' : 'black'},
          ]}
          source={
            paymentSelect === 2
              ? require('../../img/radio.png')
              : require('../../img/radio1.png')
          }
        />
        <Text style={styles.paymentMethodText}>UPI</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setpaymentSelect(3)}>
        <Image
          style={[
            styles.radioNon,
            {tintColor: paymentSelect === 3 ? 'orange' : 'black'},
          ]}
          source={
            paymentSelect === 3
              ? require('../../img/radio.png')
              : require('../../img/radio1.png')
          }
        />
        <Text style={styles.paymentMethodText}>Cash on Delivery</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Address</Text>
      <Text
        style={[styles.title, {marginTop: 10, fontSize: 16, color: '#636363'}]}>
        {selectAddress}
      </Text>
      <Custombutton bg={'green'} title={'Pay & Order'} color={'#fff'} />
    </View>
  );
};

export default CheckOutScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10,
    color: '#000',
    marginBottom:10
  },
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
  totalView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    borderBottomWidth: 0.4,
    alignItems: 'center',
    borderBottomColor: '#B7B7B7',
  },
  paymentMethod: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 20,
    paddingLeft: 20,
  },
  radioNon: {
    width: 24,
    height: 24,
  },
  paymentMethodText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#000',
  },
});
