import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

import Icon from "../../assets/mapa.svg";

export function State() {
  const navigation = useNavigation();
  const [state, setState] = useState();
  const countries = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];

  function handleNext() {
    navigation.navigate("roof");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon />
        <View style={styles.infoArea}>
          <Text style={styles.infoAreaTitle}>Estado</Text>
          <Text style={styles.infoAreaSubTitle}>
            Em qual Estado você irá instalar seu ar condicionado?
          </Text>
        </View>
      </View>
      <View style={styles.selectArea}>
        <SelectDropdown
          buttonStyle={{ width: "95%", borderRadius: 4 }}
          buttonTextStyle={{
            fontWeight: "700",
            fontSize: 18,
            marginLeft: -135,
          }}
          defaultButtonText="Selecione o Estado"
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setState(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
      <View style={{marginBottom: -220}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleNext}
          style={styles.button}
        >
          <Text style={styles.buttonText}>próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
