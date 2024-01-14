import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Loading from './src/components/Loading';

export default function App() {
  return (
    <View>
      <Text>Calculadora de BTUs</Text>
      <StatusBar style="auto" />
    </View>
  );
}
