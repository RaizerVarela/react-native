import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'


export default function Comp(){ // Com o export default o nome da função não importa, podedendo ser função anonima
  return <Text style={Estilo.fontG}>Comp #Oficial</Text>
}
function Comp1(){ // O nome é importante pois sera visto onde o arquivo for importado
  return <Text style={Estilo.fontG}>Comp #01</Text>
}
function Comp2(){
  return <Text style={Estilo.fontG}>Comp #02</Text>
}

export {Comp1, Comp2}