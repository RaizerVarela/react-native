import React from 'react'
import {Text, TextInput, Button, View} from 'react-native'
import Estilo from '../estilo'

import Numero from './Numero'

export default class Mega extends React.Component{  
  state={
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: []
  }

  alterarQtdeNumero=(qtde)=>{
    this.setState({qtdeNumeros: +qtde})
  }

  gerarNumeroNaoContido=nums=>{
    const novo = parseInt(Math.random()*60)+1
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
  }
  
  //gerarNumeros=()=>{
  //  const numeros = Array(this.state.qtdeNumeros)
  //    .fill()
  //    .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
  //    .sort((a,b)=>a-b)
  //  this.setState({numeros})
  //}
  
  gerarNumeros=()=>{
    const{qtdeNumeros} = this.state
    const numeros = []

    for(let i=0; i<qtdeNumeros; i++){
      const n = this.gerarNumeroNaoContido(numeros)
      numeros.push(n)
    }
    numeros.sort((a,b)=> a-b)
    this.setState({numeros})
  }

  exibirNumeros=()=>{
    const nums = this.state.numeros
    return nums.map(num =>{
      return <Numero num={num}/>
    })
  }

  render(){
    return(
      <>
        <Text style={Estilo.fontG}>
          Gerador de Mega-Sena
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Quantidade de números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button
          title='Gerar'
          onPress={this.gerarNumeros}
        />
        <View style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {this.exibirNumeros()}
        </View>
      </>
    )
  }
}