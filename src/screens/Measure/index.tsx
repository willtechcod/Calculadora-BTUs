import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import Icon from "../../assets/area.svg";

export function Measure() {
  const navigation = useNavigation();
  

  function handleNext(){
    navigation.navigate('windows');
  }

 return (
  <View style={styles.container}>
  <View style={styles.header}>
    <Header/>
  </View>
  <View style={styles.content}>
    <Icon />
      <View style={styles.infoArea}>
        <Text style={styles.infoAreaTitle}>
          Área do Ambiente
        </Text>
        <Text style={styles.infoAreaSubTitle}>
          Qual o tamanho (em metros) do ambiente para instalar seu ar condicionado?
        </Text>
      </View>
  </View>
  <View style={styles.inputArea}>
    <View style={styles.inputAreaButton}>
      <View style={styles.inputAreaText}>
        <Text style={styles.inputAreaButtonText}>Largura(metros)</Text>
      </View>
      <TextInput placeholder='0' />
      <TouchableOpacity style={styles.inputAreaButtonMinus}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inputAreaButtonAdd}>
      <Text>+</Text>
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.inputArea}>
    <View style={styles.inputAreaButton}>
      <View style={styles.inputAreaText}>
        <Text style={styles.inputAreaButtonText}>Altura(metros)</Text>
      </View>
      <TextInput placeholder='0' />
      <TouchableOpacity style={styles.inputAreaButtonMinus}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inputAreaButtonAdd}>
      <Text>+</Text>
      </TouchableOpacity>
    </View>
  </View>
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleNext}
       style={styles.button}
       >
          <Text style={styles.buttonText}>
            próximo
          </Text>
      </TouchableOpacity>
 </View>
  );
}