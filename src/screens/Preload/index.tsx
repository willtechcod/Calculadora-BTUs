import React, { useState } from "react";
import { styles } from "./styles";

import { Loading } from "../../components/Loading";
import Icon from "../../assets/snow.svg";
import { View } from "react-native";

export function Preload() {
  const [isLoading, setisLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Icon />
      <Loading />
    </View>
  );
}
