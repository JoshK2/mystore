import React from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from './button';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#cdcdcd',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  image: {width: 300, height: 300, marginBottom: 10},
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  description: {color: '#b1b1b1', marginBottom: 10},
  price: {
    color: '#7de3bb',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notInStock: {textAlign: 'center'},
});

const Product = ({title, description, price, image, addToCart}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.rowContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      {addToCart ? (
        <Button
          title="Add to Cart"
          onPress={() => Alert.alert(`${title} was added to cart`)}
        />
      ) : (
        <Text style={styles.notInStock}>Not in stock</Text>
      )}
    </View>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  addToCart: PropTypes.bool,
};

export {Product};
