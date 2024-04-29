import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

import Icon from "../../assets/pessoas.svg";
import { useState } from "react";

export function People() {
  const navigation = useNavigation();
  const [count, setCount] = useState<number>(0);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleNext() {
    navigation.navigate("result");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon />
        <View style={styles.infoArea}>
          <Text style={styles.infoAreaTitle}>Quantidade de Pessoas</Text>
          <Text style={styles.infoAreaSubTitle}>
            Qual a quantidade de pessoas no ambiente que será instalado o ar
            condicionado?
          </Text>
        </View>
      </View>
      <View style={styles.inputArea}>
        <View style={styles.inputAreaButton}>
          <View style={styles.inputAreaText}>
            <Text style={styles.inputAreaButtonText}>Pessoas</Text>
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
        <Text style={styles.buttonText}>próximo</Text>
      </TouchableOpacity>
    </View>
  );
}
