import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginImage from '../images/LoginImage.svg';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginImage width="100%" height="328px"/>
      <View style={{ marginTop: 10}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Bem vindo a PEX!</Text>
        <Text style={{ color: '#999999', width: 311}}>Informe os seus dados para ter acesso a um mundo de economia para sua obra</Text>
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
      <TouchableOpacity>
        <Text style={{ color: '#F09200' }}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogin} onPress={ () => navigation.navigate('Main') }>
        <Text style={{fontSize: 14, color: 'white'}}>Acessar</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 20}}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={ () => navigation.navigate('Register') }>
          <Text style={{ color: '#F09200'}}> Criar Conta</Text>
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
    marginTop: 30,
  },
  input: {
    height: 56,
    margin: 12,
    padding: 10,
    width: 311,
    backgroundColor: '#EFEFEF',
    borderRadius: 12
  },
  buttonLogin: {
    width: 311,
    height: 56,
    backgroundColor: '#F09200',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 12,
  }
});