import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';
import { Preload } from './src/screens/Preload';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <>
      <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded? <Routes/> : <Preload/>}
      
    </>
  );
}
