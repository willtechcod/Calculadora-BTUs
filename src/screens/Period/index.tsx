import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import Icon from "../../assets/sun.svg";
import { ButtonAction } from '../../components/ButtonAction';

export function Period() {
  const navigation = useNavigation();

  function handleNext(){
    navigation.navigate('lights');
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
          Exposição solar
        </Text>
        <Text style={styles.infoAreaSubTitle}>
          Quando o ambiente fica mais exposto à luz solar?
        </Text>
      </View>    
  </View>
      < ButtonAction
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