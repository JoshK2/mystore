import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Product} from './product';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'flex-start'},
});

const ProductsList = ({list}) => {
  return (
    <View style={styles.container}>
      {list.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          addToCart={product.stock > 0}
        />
      ))}
    </View>
  );
};

ProductsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
      image: PropTypes.string,
      stock: PropTypes.number,
    }),
  ),
};

export {ProductsList};
