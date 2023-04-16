import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ImageR from '../images/ImageRegister.jpeg';

export default function Register({ navigation }) {
  const [ valueCheckBox, setValueCheckBox ] = useState('white')
  return (
    <View style={styles.container}>
      <Image source={ImageR} style={{ width: 411}}/>
      <View style={{ marginTop: 10, width: 311}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Crie sua conta na PEX</Text>
        <Text style={{ color: '#999999', width: 311, fontSize: 14}}>Informe o seus dados para criar sua conta na PEX e economizar muito na sua obra</Text>
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
        />
      </SafeAreaView>
      <View style={{ flexDirection: 'row', width: 308, justifyContent: 'flex-start', marginTop: 10, alignItems: 'flex-start' }}>
        <Text style={{ width: 16, height: 16, borderWidth: 1, borderColor: '#F1F0F3', borderRadius: 6, backgroundColor: valueCheckBox, marginTop: 3, marginRight: 2 }} onPress={ () => setValueCheckBox(valueCheckBox === 'white' ? '#F09200' : 'white')}/>
        <Text style={{ width: 300}}>
           Li e aceito os
          <Text style={{ color: '#F09200'}} onPress={ () => navigation.navigate('Terms') }> Termos de serviço </Text>
          e políticia de privacidade
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('RegisterS2') }>
        <Text style={{fontSize: 14, color: 'white'}}>Continuar</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 20}}>
        <Text>Já possui uma conta?</Text>
        <TouchableOpacity onPress={ () => navigation.navigate('Login') }>
          <Text style={{ color: '#F09200'}}> Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  input: {
    height: 56,
    margin: 12,
    padding: 10,
    width: 311,
    backgroundColor: '#EFEFEF',
    borderRadius: 12
  },
  buttonRegister: {
    width: 311,
    height: 56,
    backgroundColor: '#F09200',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  }
});