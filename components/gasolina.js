import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default (props) => {
  return (
    <View style={estilos.bloco}>
      <Text>Digite o preço da Gasolina</Text>
      <TextInput
        style={estilos.txt}
        keyboardType={"numeric"}
        onChangeText={(text) => {
          props.gas(text);
        }}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  bloco: {
    marginBottom: 10,
  },
  txt: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 7,
    textAlign: "center",
  },
});
