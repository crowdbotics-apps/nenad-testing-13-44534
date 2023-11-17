import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, TextInput, ScrollView } from 'react-native';

const ShoppingCartScreen = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    email: ''
  });
  const [shippingMethod, setShippingMethod] = useState('Standard');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const dummyData = [{
    id: '1',
    title: 'Product 1',
    price: 10,
    quantity: 1
  }, {
    id: '2',
    title: 'Product 2',
    price: 20,
    quantity: 2
  }, {
    id: '3',
    title: 'Product 3',
    price: 30,
    quantity: 3
  }];
  const totalCost = dummyData.reduce((total, item) => total + item.price * item.quantity, 0);
  return <SafeAreaView style={_styles.RVcdBUil}>
      <ScrollView>
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.fLYSMMRP}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.GSNWGFXI} />
              <Text>{item.title}</Text>
              <Text>{item.quantity} x ${item.price}</Text>
            </View>} />
        <Text style={_styles.ziNZXygQ}>Total: ${totalCost}</Text>
        <View style={_styles.EcgpSvge}>
          <Text style={_styles.AYBIULjr}>Customer Information</Text>
          <TextInput placeholder="Name" value={customerInfo.name} onChangeText={text => setCustomerInfo({ ...customerInfo,
          name: text
        })} style={_styles.ZzFRyYUY} />
          <TextInput placeholder="Address" value={customerInfo.address} onChangeText={text => setCustomerInfo({ ...customerInfo,
          address: text
        })} style={_styles.USjRSgmc} />
          <TextInput placeholder="Email" value={customerInfo.email} onChangeText={text => setCustomerInfo({ ...customerInfo,
          email: text
        })} style={_styles.ZjsWGlbP} />
        </View>
        <View style={_styles.VObHzTQw}>
          <Text style={_styles.oTanKOtX}>Shipping Method</Text>
          <Button title="Standard" onPress={() => setShippingMethod('Standard')} />
          <Button title="Express" onPress={() => setShippingMethod('Express')} />
        </View>
        <View style={_styles.NTXnqNlq}>
          <Text style={_styles.CdttWdhZ}>Payment Method</Text>
          <Button title="Credit Card" onPress={() => setPaymentMethod('Credit Card')} />
          <Button title="PayPal" onPress={() => setPaymentMethod('PayPal')} />
        </View>
        <Button title="Checkout" onPress={() => alert('Checkout Processed')} />
      </ScrollView>
    </SafeAreaView>;
};

export default ShoppingCartScreen;

const _styles = StyleSheet.create({
  RVcdBUil: {
    flex: 1,
    backgroundColor: "#fff"
  },
  fLYSMMRP: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  GSNWGFXI: {
    width: 50,
    height: 50
  },
  ziNZXygQ: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    padding: 10
  },
  EcgpSvge: {
    padding: 10
  },
  AYBIULjr: {
    fontSize: 20,
    fontWeight: "bold"
  },
  ZzFRyYUY: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10
  },
  USjRSgmc: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10
  },
  ZjsWGlbP: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10
  },
  VObHzTQw: {
    padding: 10
  },
  oTanKOtX: {
    fontSize: 20,
    fontWeight: "bold"
  },
  NTXnqNlq: {
    padding: 10
  },
  CdttWdhZ: {
    fontSize: 20,
    fontWeight: "bold"
  }
});