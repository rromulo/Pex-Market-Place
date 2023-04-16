import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import BackgroundFCart from '../images/backgroundFCart.jpeg';
import ArrowLeft from '../images/ArrowLeft.svg';
import BookMark from '../images/BookMark.svg';
import Foguete from '../images/foguete.svg';

export default function AddCart({ navigation, route }) {
  const { urlImg, category, Title } = route.params;
  return (
      <View style={{ flex: 1}}>
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', paddingTop: 184, flex: 1}}>
          <View style={{ backgroundColor: 'white', flex: 1, borderTopRightRadius: 28, borderTopLeftRadius: 28, alignItems: 'center', justifyContent: 'center'}}>
            <Foguete />
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Adicionado ao carrinho</Text>
              <Text style={{ textAlign: 'center', width: 320, marginTop: 10 }}>Clique no botão de finalizar para solicitar sua cotação ou continue navegando pela PEX</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Main')}>
              <Text style={{fontSize: 14 }}>Continuar comprando</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFinish} onPress={ () => navigation.navigate('Orders')}>
              <Text style={{fontSize: 14, color: 'white'}} >Finalizar cotação</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  buttonFinish: {
    minWidth: 311,
    height: 56,
    backgroundColor: '#F09200',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  button: { 
    width: 311,
    height: 56,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F1F0F3',
    paddingTop: 6,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 20,
  }
});