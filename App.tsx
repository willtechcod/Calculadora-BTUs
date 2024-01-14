import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { Preload } from './src/screens/Preload';

export default function App() {
  return (
    <View>
      <Preload/>
      <StatusBar style="auto" />
    </View>
  );
}
