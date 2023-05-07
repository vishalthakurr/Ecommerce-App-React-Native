import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';
import {addproducts} from '../../redux/slices/ProductSlice';
import {useDispatch} from 'react-redux';
const Home = () => {
  const navigation = useNavigation();
  const [products, setproducts] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    getproduct();
  }, []);

  //*api call get product
  const getproduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    if (data.length !== 0) {
      data.map(item => {
        item.qty = 1;
      });
      setproducts(data);
      dispatch(addproducts(data));
    } else {
      // Something went wrong
    }
  };

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
      {/* Products list */}

      <FlatList
        style={styles.ListProduct}
        data={products}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.navigate('ProductDetail', {data: item});
              }}
              style={styles.ProductItem}>
              <Image source={{uri: item.image}} style={styles.ItemImage} />
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
                <Text style={styles.price}>
                  {'$' + Math.round(item.price)}
                </Text>
              </View>
            </TouchableOpacity>
          );
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
});
