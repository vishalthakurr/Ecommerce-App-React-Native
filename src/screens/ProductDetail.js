import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import Custombutton from '../common/Custombutton';
import {useDispatch} from 'react-redux';
import {addItemRowishlist} from '../redux/slices/wishlistSlice';
import {addItemtoCart} from '../redux/slices/CartSlice';

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {image, title, description, price} = route.params.data;
  return (
    <View style={styles.conatiner}>
      <Header
        leftIcon={require('../img/back.png')}
        RightIcon={require('../img/cart.png')}
        title={'Product Item'}
        OnClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{marginBottom: 10}}>
        <Image source={{uri: image}} style={styles.banner} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.price, {color: '#000', marginLeft: 20}]}>
            {'Price:'}
          </Text>
          <Text style={styles.price}> {' $' + price}</Text>
        </View>
        <TouchableOpacity
          style={styles.wishlistbtn}
          onPress={() => dispatch(addItemRowishlist(route.params.data))}>
          <Image source={require('../img/wishlist.png')} style={styles.Icon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, {backgroundColor: 'orange'}]}
          onPress={() => dispatch(addItemtoCart(route.params.data))}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 25,
              fontWeight: '400',
            }}>
            {'Add to Cart'}
          </Text>
        </TouchableOpacity>

        {/* <Custombutton
          bg={'#ff7803'}
          title={'Buy Now'}
          color={'#000'}
          onClick={() => {}}
        /> */}
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  conatiner: {flex: 1, backgroundColor: '#fff', height: '100%'},
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#000',
    fontWeight: '300',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
  },
  price: {
    fontSize: 20,
    color: 'green',
    fontWeight: '800',
    marginTop: 10,
  },
  wishlistbtn: {
    position: 'absolute',
    right: 20,
    top: 50,
    backgroundColor: '#E2DFDF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Icon: {
    width: 25,
    height: 25,
  },
  btn: {
    width: Dimensions.get('window').width - 40,
    height: 53,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});
