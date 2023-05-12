import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../common/Header';
import {useSelector} from 'react-redux';

const Orders = () => {
  const navigation = useNavigation();
  const orderlist = useSelector(state => state.order);
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   setdata(orderlist);
  // }, [orderlist]);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../img/back.png')}
        OnClickLeftIcon={() => navigation.goBack()}
        title={'Orders'}
      />
      <FlatList
        data={orderlist.data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.orderItem}>
              <Text style={{marginLeft: 80}}>
                {new Date(item.orderdate).toUTCString().toString()}
              </Text>
              <FlatList
                data={item.items}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.ProductItem}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.ItemImage}
                      />
                      <View style={styles.nameView}>
                        <Text>
                          {item.title.length > 20
                            ? item.title.substring(0, 20)
                            : item.title}
                        </Text>
                        <Text>
                          {item.description.length > 30
                            ? item.description.substring(0, 30)
                            : item.description}
                        </Text>
                        <Text style={{color: 'green'}}>
                          {'Rs.' + item.price}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  orderItem: {
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 10,
  },
  ProductItem: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  ItemImage: {
    width: 50,
    height: 50,
  },
  nameView: {
    marginLeft: 20,
  },
});
