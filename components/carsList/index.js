import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../carItem';

const CarsList = () => {
  console.log('Carlist Rendered');
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={(item) => <CarItem car={item.item} />}
      ></FlatList>
    </View>
  );
};

export default CarsList;
