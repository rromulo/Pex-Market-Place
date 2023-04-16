import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowLeft from '../images/ArrowLeft.svg';
import Foguete from '../images/foguete.svg';

export default function Orders({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 60, backgroundColor: 'white'}}>
      <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={{ width: "5%", padding: 10 }} onPress={ () => navigation.navigate('Main')}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={{width: "95%", textAlign: 'center', fontWeight: 'bold'}}>Compra</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}><Foguete /></View>

      <View style={{ marginTop: 50 }}>
        
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginTop: 10 }}>Obrigado pela sua compra</Text>
        <Text style={{ color: '#81818A', textAlign: 'left', width: 320 }}>
          Você irá receber uma mensagem no email <Text style={{ fontWeight: 'bold'}}>maria@velty.com.br</Text> quando a sua compra for atualizada
        </Text>
      </View>

      <View style={{ width: '100%', padding: 20}}>
        <View style={{ borderWidth: 1, borderColor: '#F1F0F3', padding: 20, borderRadius: 12}}>
          <Text>Detalhes da compra</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20}}>
            <View>
              <Text style={{ color: '#999999' }}>Número da compra</Text>
              <Text style={{ color: '#999999' }}>Quantidade de itens</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>#FDS639820</Text>
              <Text style={{ fontWeight: 'bold', color: '#2ED573', textAlign: 'right' }}>321</Text>
            </View>
          </View>
        </View>
      </View>

      <View >
        <TouchableOpacity style={styles.buttonFollowOrder} onPress={ () => navigation.navigate('ListOrders')}>
          <Text style={{fontSize: 14, color: 'white'}}>Acompanhar compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonFollowOrder: {
    width: 311,
    height: 56,
    backgroundColor: '#F09200',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});