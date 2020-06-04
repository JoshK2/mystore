import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ProductsList} from './src/components/products-list';

const productsList = [
  {
    title: 'Nike Air Vapormax 360',
    description: `Men's Shoe`,
    price: '$225.00',
    image:
      'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/i1-9944e829-002c-4a6b-93ed-cc8801c7eb0c/air-vapormax-360-mens-shoe-b09bdB.jpg',
    stock: 2,
  },
  {
    title: 'Nike Air Max 95 (Korea)',
    description: 'Shoe',
    price: '$180.00',
    image:
      'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/5efc19ea-b3b5-428b-9558-bf4ca3f6d05f/air-max-95-korea-shoe-ZKTfcL.jpg',
    stock: 0,
  },
  {
    title: 'Air Jordan 1 Low',
    description: 'Shoe',
    price: '$90.00',
    image:
      'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/b9026d85-06bd-4629-a727-dd68f6c49807/air-jordan-1-low-shoe-z3Tl2VeJ.jpg',
    stock: 2,
  },
  {
    title: 'Nike SuperRep Go',
    description: `Men's Training Shoe`,
    price: '$100.00',
    image:
      'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/i1-29a5195b-aa65-48a9-80f6-72166078abdc/superrep-go-mens-training-shoe-19sK4X.jpg',
    stock: 2,
  },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>Products</Text>
            <ProductsList list={productsList} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
});

export default App;
