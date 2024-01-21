import { useState } from 'react';
import { Text,TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';


export function Result() {
  const navigation = useNavigation();
  const [count, setCount] = useState<number>(0);

  function handleNext(){
    navigation.navigate('info');
  }

 return (
  <View style={styles.container}>
  <View style={styles.header}>
    <Header/>
  </View>

  <View style={styles.content}>
      <View style={styles.infoArea}>
        <Text style={styles.infoAreaTitle}>
          Resultado
        </Text>
        <Text style={styles.infoAreaSubTitle}>
            A capacidade necessária para o seu ambiente é aproximadamente de:
        </Text>
      </View>
  </View>
    <View style={styles.infoAreaResult}>
        <Text style={styles.infoAreaTitleResult}>8448 BTU/h</Text>
        <Text style={styles.infoAreaSubTitle}>(valor da simulação realizada)</Text>
    </View>
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleNext}
       style={styles.button}
       >
          <Text style={styles.buttonText}>
            Início
          </Text>
      </TouchableOpacity>
 </View>
  );
}