import { StyleSheet, View, Image } from "react-native";
import React from "react";

export default (props) => {
  return (
    <View style={estilos.bloco}>

       {
         props.comb == ''?
         <Image source={require("../assets/bomba.png")} style={estilos.bomba} />
         :
         props.comb == 'G'?
         <Image source={require("../assets/bombaG.png")} style={estilos.bomba} />
         :
         <Image source={require("../assets/bombaE.png")} style={estilos.bomba} />

       }

      
    </View>
  );
};

const estilos = StyleSheet.create({
  bloco: {
    marginBottom: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  txt: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 7,
    textAlign: "center",
  },
  bomba: {
      resizeMode:'stretch'
  },
});
