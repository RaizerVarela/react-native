import React, {Fragment} from "react";
import {Text} from "react-native"
import Estilo from "./estilo"

export default props => (
  <>
    <Text style={Estilo.fontG}>{props.principal}</Text>
    <Text>{props.secundario}</Text>
  </>
)
//Utilização do fragment (<></>caso necessario colocar propriedade para envolver o fragment usar <React.Fragment propriedade> )