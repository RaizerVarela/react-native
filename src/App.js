import React from 'react';
import {View, StyleSheet} from 'react-native';

import Aleatorio from './components/Aleatorio';
//import MinMax from './components/MinMax';
//import CompPadrao, {Comp1, Comp2} from './components/Multi'
//import Primeiro from './components/Primeiro';

export default () => (
  <View style={style.App}>
    <Aleatorio min={10} max={60}/>
    {/*<MinMax min={3} max={20}/>
    <MinMax min={1} max={94}/>
    <CompPadrao/>
    <Comp1/>
    <Comp2/>
    <Primeiro />*/}
</View>
); // Código em JSX


const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})