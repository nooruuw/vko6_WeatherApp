import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Weather from './components/Weather';
import Position from './components/Position';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Säätiedot</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 16,

  },
});
