import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import EmptyCart from '../images/emptyCart.svg';
import ArrowLeft from '../images/ArrowLeft.svg';

export default function ShoppingCart({ navigation }) {
  return (
    <View style={{ padding: 20, paddingTop: 60}}>
      <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={{ width: "5%", padding: 10 }} onPress={ () => navigation.navigate('Main')}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={{width: "95%", textAlign: 'center', fontWeight: 'bold'}}>Carrinho</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 146 }}>
        <EmptyCart />
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginTop: 30}}>Carrinho vazio</Text>
        <Text style={{ color: '#81818A', textAlign: 'center', width: 320}}>O seu carrinho está vazio, navegue pela PEX para encontrar o que você precisa</Text>
      </View>
    </View>
  )
}