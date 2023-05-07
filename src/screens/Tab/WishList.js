import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Header from '../../common/Header';

const WishList = () => {
  const item = useSelector(state => state.wishlist);
  const navigation = useNavigation();
  const [Wishlistproducts, setWishlistproducts] = useState(
    item.data.length !== 0 ? item.data : [],
  );

  return (
    <View View style={styles.conatiner}>
      <Header title={'WishList '} />
      {/* wishlist list */}
      {Wishlistproducts.length !== 0 && (
        <FlatList
          style={styles.ListProduct}
          data={Wishlistproducts}
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
                  <Text style={styles.price}> {'$' + item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default WishList;
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
