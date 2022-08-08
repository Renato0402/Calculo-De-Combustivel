import { StyleSheet, Text, View} from "react-native";
import React from "react";

export default (props) => {
  return (
    <View style={estilos.bloco}>
      <Text>Melhor Combustível: {props.res}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  bloco: {
    marginBottom: 10,
  },
});
