import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import StatusBar from "./components/statusBar";
import Gasolina from "./components/gasolina";
import Etanol from "./components/etanol";
import BtnCalcuar from "./components/btnCalcular";
import Resultado from "./components/resultado";
import ImgResultado from "./components/imgResultado";
import React, { useState } from "react";

export default function App() {
  const [gasolina, setGasolina] = useState(0);
  const [etanol, setEtanol] = useState(0);
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    if (!gasolina) {
      alert("Informe o preço da gasolina");
      return;
    }
    if (!etanol) {
      alert("Informe o preço do etanol");
      return;
    }

    let calc = ((etanol / gasolina) * 100).toFixed(1);

    let result = calc > 70 ? "Gasolina" : "Etanol";

    alert(
      "O Etanol está custando " +
        calc +
        "% da Gasolina. Portanto é melhor abastecer com " +
        result
    );
    setResultado(result);
  };

  const limpar = () => {
    setResultado("");
  };

  const setarGasolina = (v) => {
    limpar();
    setGasolina(v);
  };

  const setarEtanol = (v) => {
    limpar();
    setEtanol(v);
  };

  return (
    <SafeAreaView style={estilos.principal}>
      <StatusBar />
      <Gasolina gas={setarGasolina} />
      <Etanol et={setarEtanol} />
      <BtnCalcuar calc={calcular} />
      <Resultado res={resultado}/>
      <ImgResultado comb={resultado.charAt(0)}/>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  principal: {
    padding: 10,
  },
});
