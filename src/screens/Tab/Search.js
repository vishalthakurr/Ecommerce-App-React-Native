import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const products = useSelector(state => state);
  const [search, setsearch] = useState('');
  const [searchlist, setsearchlist] = useState(products.product.data);
  const filterdata = txt => {
    let newdata = products.product.data.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setsearchlist(newdata);
  };
  return (
    <View style={styles.conatiner}>
      <Header title={'Search Items'} />
      <View style={styles.SerachView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../img/search.png')} style={styles.icon} />
          <TextInput
            value={search}
            onChangeText={text => {
              setsearch(text);
              filterdata(text);
            }}
            placeholder="Search iteam here..."
            style={styles.InputSearch}
          />
        </View>
        {search.length !== 0 && (
          <TouchableOpacity
            style={[
              styles.icon,
              {justifyContent: 'center', alignItems: 'center'},
            ]}
            onPress={() => {
              setsearch('');
              filterdata('');
            }}>
            <Image
              source={require('../../img/clear.png')}
              style={[styles.icon, {width: 16, height: 16}]}
            />
          </TouchableOpacity>
        )}

        <FlatList
          data={searchlist}
          style={styles.ListProduct}
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
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SerachView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
    resizeMode: 'center',
    marginRight: 15,
  },
  InputSearch: {
    width: '68%',
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
