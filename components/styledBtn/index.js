import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const StylesBtn = () => {
  return (
    <View style={styles.carContainer}>
      <Text>StylesBtn</Text>
      {/* <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting from $69,000</Text>
      </View> */}
    </View>
  );
};

export default StylesBtn;
