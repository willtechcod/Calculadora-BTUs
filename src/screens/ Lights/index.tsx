import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

import Icon from "../../assets/lampada.svg";
import { useState } from "react";
import { InputArea } from "../../components/InputArea";

export function Lights() {
  const navigation = useNavigation();
  const [count, setCount] = useState<number>(0);
  const [selected, setSelected] = useState();

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleNext() {
    navigation.navigate("electronics", selected);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon />
        <View style={styles.infoArea}>
          <Text style={styles.infoAreaTitle}>Quantidade de Lâmpadas</Text>
          <Text style={styles.infoAreaSubTitle}>
            Qual a quantidade de lâmpadas no ambiente que será instalado o ar
            condicionado?
          </Text>
        </View>
      </View>

      <InputArea placeholder="Incandescente" />
      <InputArea placeholder="Florescente" />
      <InputArea placeholder="Led" />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleNext}
        style={styles.button}
      >
        <Text style={styles.buttonText}>próximo</Text>
      </TouchableOpacity>
    </View>
  );
}
