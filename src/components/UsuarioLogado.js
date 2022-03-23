import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'
import If from './If'

export default props=>{
  const usuario = props.usuario || {}
  return (
    <>
    <Text style={Estilo.fontG}>
        Usuário logado:
    </Text>
    <If teste={usuario && Object.keys(usuario).length !== 0}>
      <Text style={Estilo.fontG}>
        {usuario.nome} - {usuario.email}
      </Text>
    </If>
    </>
  )
}