import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../carItem';

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={(item) => <CarItem car={item.item} />}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
      ></FlatList>
    </View>
  );
};

export default CarsList;
