import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Frame from '../images/Frame.svg';

export default function Home({ navigation }) {
  return (
    <View style={homesheet.container}>
      <TouchableOpacity onPress={ () => navigation.navigate('Login') } style={{alignItems: 'flex-end', paddingRight: 20, width: '100%', marginTop: 20}}>
        <Text style={{fontSize: 14}}>Pular</Text>
      </TouchableOpacity>
      <Frame width="300" height="300" style={{marginTop: 150}}/>
      <Text style={{fontSize: 32, textAlign: 'center', fontWeight: 'bold', width: '100%'}}>Bem vindo a PEX</Text>
      <Text style={{fontSize: 14, textAlign: 'center', color: '#999999', width: 340}}>Economize tempo e dinheiro em todas as etapas da sua obra. Na reforma ou construção nós iremos te auxiliar em tudo.</Text>
      <View style={{alignItems: 'flex-end', padding: 10, width: '100%', marginTop: 50}}>
        <TouchableOpacity onPress={ () => navigation.navigate('Login') } style={homesheet.button}><Text style={{fontSize: 30, color: 'white'}}>→</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const homesheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    paddingTop: 30,
  },
  button: {
    backgroundColor: '#F09200',
    borderWidth: 0.5, 
    borderColor: '#fff', 
    height: 64, 
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: 64,
  }
})
