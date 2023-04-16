import { View, Text, TouchableOpacity, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Information from '../images/IconInformations.svg';
import ProfilePicture from '../images/profilePicture.svg';
import ArrowLeft from '../images/ArrowLeft.svg'

export default function RegisterS2({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 20, paddingTop: 30}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
        <TouchableOpacity onPress={ () => navigation.navigate('Register') }><ArrowLeft /></TouchableOpacity>
        <Text>Dados pessoais</Text>
        <TouchableOpacity>
          <Information />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 50}}>
        <TouchableOpacity>
          <ProfilePicture />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: '#F09200', marginTop: 20, fontWeight: 'bold' }}>Enviar foto</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ alignItems: 'center', marginTop: 20}}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
        />
        <TextInput
          style={styles.input}
          placeholder="Data de nascimento"
        />
        <TextInput
          style={styles.input}
          placeholder="+55 | Telefone"
        />
      </SafeAreaView>
      <View style={{width: 320, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 100, marginLeft: 'auto', marginRight: 'auto'}}>
        <TouchableOpacity style={styles.buttonSkip} onPress={ () => navigation.navigate('FaceId') }>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Pular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('FaceId') }>
          <Text style={{fontSize: 14, color: 'white'}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 56,
    margin: 12,
    padding: 10,
    width: 311,
    backgroundColor: '#EFEFEF',
    borderRadius: 12
  },
  buttonSkip: {
    width: 151,
    height: 56,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F1F0F3',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  },
  buttonRegister: {
    width: 151,
    height: 56,
    backgroundColor: '#F09200',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  }
});