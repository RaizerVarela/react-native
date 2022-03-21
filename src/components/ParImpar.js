import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default ({num = 0})=>{
  if(num % 2 === 0){
    return (
      <Text style={Estilo.fontG}>Par</Text>
    )
  } else{
    return (
      <Text style={Estilo.fontG}>Ímpar</Text>
    )
  }
}