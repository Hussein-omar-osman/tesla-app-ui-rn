import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './components/carsList';

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Expo link
// https://expo.dev/@hussein-omar/tesla-cars-RN?serviceType=classic&distribution=expo-go
