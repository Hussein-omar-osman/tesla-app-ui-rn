import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles';

const StylesBtn = ({ type, words, pressed }) => {
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const color = type === 'primary' ? '#FFFFFF' : '#171A20';
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => pressed()}
      >
        <Text style={[styles.text, { color: color }]}>{words}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StylesBtn;
