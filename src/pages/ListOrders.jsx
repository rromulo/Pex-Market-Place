import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import ArrowLeft from '../images/ArrowLeft.svg';
import Union from '../images/union.svg';
import ProgressOrder from '../images/ProgressOrder.svg';

export default function ListOrders({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 60, backgroundColor: 'white'}}>
      <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={{ width: "5%", padding: 10 }} onPress={ () => navigation.navigate('Orders')}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={{width: "95%", textAlign: 'center', fontWeight: 'bold'}}>Compras</Text>
      </View>

      <View style={{width: 320, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, marginLeft: 'auto', marginRight: 'auto'}}>
        <TouchableOpacity style={styles.buttonReceive}>
          <Text style={{fontSize: 14, color: 'white'}}>Recebidas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWaiting}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Aguardando</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: 320, borderWidth: 1, borderColor: '#F1F0F3', borderRadius: 12, marginTop: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: '#999999' }}>Compra  #FDS639820</Text>
            <Text style={{ fontWeight: 'bold' }}>Realizada em 23/09/2022</Text>
          </View>
          <Union />
        </View>
        <View style={{ padding: 20, alignItems: 'center', borderTopWidth: 1, borderColor: '#F1F0F3' }}>
          <ProgressOrder />
        </View>
      </View>

      <View style={{ width: 320, borderWidth: 1, borderColor: '#F1F0F3', borderRadius: 12, marginTop: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: '#999999' }}>Compra  #AWS522122</Text>
            <Text style={{ fontWeight: 'bold' }}>Realizada em 22/07/2022</Text>
          </View>
          <Union />
        </View>
        <View style={{ padding: 20, alignItems: 'center', borderTopWidth: 1, borderColor: '#F1F0F3' }}>
          <ProgressOrder />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  buttonWaiting: {
    width: 151,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F1F0F3',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  },
  buttonReceive: {
    width: 151,
    height: 40,
    backgroundColor: '#F09200',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  }
});