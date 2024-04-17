import { Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import Icon from "../../assets/area.svg";
import { InputArea } from '../../components/InputArea';


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

  <InputArea
  placeholder="Largura (m)"
  />

  <InputArea
  placeholder="Comprimento (m)"
  />
  
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