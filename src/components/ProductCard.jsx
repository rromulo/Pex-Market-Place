import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProductCard(props) {
  const {urlImg, category, Title, navigation} = props
  return (
    <View style={{alignContent: 'center'}}>
      <Image source={urlImg}/>
      <Text style={{ color: '#999999', fontSize: 8}}>{ category }</Text>
      <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{ Title }</Text>
      <TouchableOpacity style={{
        width: 125,
        height: 25,
        backgroundColor: '#F09200',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 12,
      }}
      onPress={ () => navigation.navigate('Product', {urlImg, category, Title}) }
      >
        <Text style={{ color: 'white' }} >Comprar</Text>
      </TouchableOpacity>
    </View>
  )
}