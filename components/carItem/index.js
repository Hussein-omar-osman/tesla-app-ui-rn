import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledBtn from '../styledBtn';

const CarItem = (props) => {
  const { name, tagLine, carImage, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={carImage} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <StyledBtn
          type='primary'
          words='custom order'
          pressed={() => console.warn('custom order was clicked')}
        />
        <StyledBtn
          type='secondry'
          words='existing Inventory'
          pressed={() => console.warn('existing Inventory was clicked')}
        />
      </View>
    </View>
  );
};

export default CarItem;
