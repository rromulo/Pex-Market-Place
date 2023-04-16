import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Illustration from '../images/Illustration.svg';
import FaceIcon from '../images/FaceIcon.svg';
import ArrowLeft from '../images/ArrowLeft.svg'

export default function FaceId({ navigation }) {
  return (
    <View style={{ padding: 32, marginTop: 30 }}>
      <TouchableOpacity>
        <ArrowLeft onPress={ () => navigation.navigate('RegisterS2')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Acesse com seu Face ID</Text>
      <Text style={{ color: '#999999' }}>Habilite o Face ID para acessar de forma mais fácil e ágil a sua conta da PEX com toda segurança</Text>
      <View style={{ marginTop: 120, alignItems: 'center' }}>
        <Illustration/>
      </View>
      <View style={{width: 320, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 80, marginLeft: 'auto', marginRight: 'auto'}}>
        <TouchableOpacity style={styles.buttonface}>
          <FaceIcon />
          <Text style={{fontSize: 14, color: 'white'}}> Habilitar Face ID</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonface: {
    flexDirection: 'row',
    width: 311,
    height: 56,
    backgroundColor: '#F09200',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  }
});