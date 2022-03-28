import React from 'react'
import {Text, TextInput} from 'react-native'
import Estilo from '../estilo'

export default class Mega extends React.Component{  
  state={
    qtdeNumeros: this.props.qtdeNumeros
  }

  alterarQtdeNumero=(qtde)=>{
    this.setState({qtdeNumeros: qtde})
  }

  render(){
    return(
      <>
        <Text style={Estilo.fontG}>
          Gerador de Mega-Sena {this.state.qtdeNumeros}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Quantidade de números"
          value={this.state.qtdeNumeros}
          onChangeText={this.alterarQtdeNumero}
        />
      </>
    )
  }
}