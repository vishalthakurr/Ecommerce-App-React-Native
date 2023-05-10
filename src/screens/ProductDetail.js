import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import Custombutton from '../common/Custombutton';
import {useDispatch, useSelector} from 'react-redux';
import {addItemRowishlist} from '../redux/slices/wishlistSlice';
import {addItemtoCart, addQtYItemtoCart} from '../redux/slices/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserLogin from '../common/UserLogin';

const ProductDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const {image, title, description, price, id} = route.params.data;
  const [QTYitem, setQTYitem] = useState(1);
  const [modelShow, setmodelShow] = useState(false);

  const userStatus = async () => {
    let isuserlogin = false;
    const status = await AsyncStorage.getItem('is_User_login');
    if (status === null) {
      isuserlogin = false;
    } else {
      isuserlogin = true;
    }
    return isuserlogin;
  };
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.price, {color: '#000', marginLeft: 20}]}>
            {'Price:'}
          </Text>
          <Text style={styles.price}> {' $' + Math.round(price)}</Text>
          <View style={[styles.qtyView, {marginLeft: 10}]}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (QTYitem > 1) {
                  setQTYitem(QTYitem - 1);
                }
              }}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyvalue}>{QTYitem}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (QTYitem < 10) {
                  setQTYitem(QTYitem + 1);
                }
              }}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.wishlistbtn}
          onPress={() => {
            // if (userStatus() === true) {
            dispatch(addItemRowishlist(route.params.data));
            // } else {
            // setmodelShow(true);
            // }
          }}>
          <Image source={require('../img/wishlist.png')} style={styles.Icon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnadd, {backgroundColor: 'orange'}]}
          onPress={() => {
            // if (userStatus() === true) {
            dispatch(addQtYItemtoCart({...route.params.data, qty: QTYitem}));
            // } else {
            //   setmodelShow(true);
            // }
          }}>
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
        <Custombutton
          bg={'#ff7803'}
          title={'Buy Now'}
          color={'#000'}
          onClick={() => {
            dispatch(addQtYItemtoCart({...route.params.data, qty: QTYitem}));
            navigation.navigate('Checkout');
          }}
        />
      </ScrollView>
      {/* <UserLogin
        modeVisibale={modelShow}
        onClickLogin={() => {
          setmodelShow(false);
          navigation.navigate('Login');
        }}
        onClickSignup={() => {
          setmodelShow(false);
          navigation.navigate('Signup');
        }}
        onClose={() => setmodelShow(false)}
      /> */}
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
  btnadd: {
    width: Dimensions.get('window').width - 40,
    height: 53,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
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
