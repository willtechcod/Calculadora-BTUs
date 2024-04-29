import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import ToggleSwitch from "toggle-switch-react-native";

import Icon from "../../assets/windows.svg";
import { useState } from "react";

export function Windows() {
  const navigation = useNavigation();
  const [window, setWindow] = useState<number>(0);
  const [active, setActive] = useState(true);
  const [isActive, setIsActive] = useState<number>(0);

  function handlePlus() {
    setWindow(window + 1);
    if (active) {
      const isActive = window * 800;
      setIsActive(isActive);
    }
    console.log(isActive);
  }

  function handleMinus() {
    if (window > 0) {
      setWindow(window - 1);
      const isActive = window;
      setIsActive(isActive);
    }
    console.log(window);
  }

  function handleNext() {
    navigation.navigate("period");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon />
        <View style={styles.infoArea}>
          <Text style={styles.infoAreaTitle}>Quantidade de Janelas</Text>
          <Text style={styles.infoAreaSubTitle}>
            Qual a quantidade de janelas no ambiente que será instalado o ar
            condicionado?
          </Text>
        </View>
      </View>
      <View style={styles.inputArea}>
        <View style={styles.inputAreaButton}>
          <View style={styles.inputAreaText}>
            <Text style={styles.inputAreaButtonText}>Janelas</Text>
          </View>
          <View style={styles.inputAreaText}>
            <Text>{window}</Text>
          </View>
          <TouchableOpacity
            style={styles.inputAreaButtonMinus}
            onPress={handleMinus}
          >
            <Text style={styles.inputAreaButtonMinusText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputAreaButtonAdd}
            onPress={handlePlus}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 50, flexDirection: "row" }}>
        <ToggleSwitch
          isOn={active}
          onColor="red"
          offColor="#2B5B96"
          circleColor="#E6E5E5"
          label="Com proteção"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="medium"
          onToggle={(isOn) => setActive(!active)}
        />
        <View style={{ marginLeft: 8 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "900",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Sem proteção
          </Text>
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
