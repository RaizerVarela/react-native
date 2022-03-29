import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import getNativeComponentAttributes from 'react-native/Libraries/ReactNative/getNativeComponentAttributes'
import Estilo from '../estilo'

export default ({num}) =>{
  return (
    <View style={style.Container}>
      <Text style={[Estilo.fontG, style.Num]}>
        {num}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  Container:{
    height:50,
    width:50,
    backgroundColor:'#000',
    magin:5,
    borderRadius:25
  },
  Num:{
    color: '#FFF'
  }
})