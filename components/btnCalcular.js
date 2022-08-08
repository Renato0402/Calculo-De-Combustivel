import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";

export default (props) => {
  return (
    <View style={estilos.bloco}>
      <TouchableHighlight style={estilos.btn} onPress={props.calc}>
        <Text style={estilos.txtBtn}>Calcular</Text>
      </TouchableHighlight>
    </View>
  );
};

const estilos = StyleSheet.create({
  bloco: {
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#800",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    padding: 15,
  },
  txtBtn: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 20,
  },
});
