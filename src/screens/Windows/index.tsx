import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import Icon from "../../assets/windows.svg";
import { useState } from 'react';

export function Windows() {
  const navigation = useNavigation();
  const [count, setCount] = useState<number>(0);
  
  
  function handlePlus(){
      setCount(count + 1)
  }

  function handleMinus(){
    if(count >0){
      setCount(count - 1)
    }
  }

  function handleNext(){
    navigation.navigate('period');
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
        Quantidade de Janelas
        </Text>
        <Text style={styles.infoAreaSubTitle}>
        Qual a quantidade de janelas no ambiente que será instalado o ar condicionado?
        </Text>
      </View>
  </View>
  <View style={styles.inputArea}>
    <View style={styles.inputAreaButton}>
      <View style={styles.inputAreaText}>
        <Text style={styles.inputAreaButtonText}>Janelas</Text>
      </View>
      <View style={styles.inputAreaText}>
        <Text>{count}</Text>
      </View>
      <TouchableOpacity 
      style={styles.inputAreaButtonMinus}
      onPress={handleMinus}
      >
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.inputAreaButtonAdd}
      onPress={handlePlus}
      >
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