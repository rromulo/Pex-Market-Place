import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ArrowLeft from '../images/ArrowLeft.svg';
import BookMark from '../images/BookMark.svg';


export default function Product({ navigation, route }) {
  const { urlImg, category, Title } = route.params;
  return (
    <View style={{...styles.container, padding: 20, paddingTop: 60 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <TouchableOpacity onPress={ () => navigation.navigate('Main')}>
          <ArrowLeft />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('Details Product', { urlImg, category, Title })}>
          <BookMark />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} >
        <TouchableOpacity style={{ padding: 10}} onPress={ () => navigation.navigate('Galery', { urlImg, category, Title })}>
          <Image source={urlImg} style={{ height: 334, width: 500, borderRadius: 24}} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10}} onPress={ () => navigation.navigate('Galery', { urlImg, category, Title })}>
          <Image source={urlImg} style={{ height: 334, width: 500, borderRadius: 24}} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10}} onPress={ () => navigation.navigate('Galery', { urlImg, category, Title })}>
          <Image source={urlImg} style={{ height: 334, width: 500, borderRadius: 24}} />
        </TouchableOpacity>
      </ScrollView>
      <View style={{width: '100%', padding: 10}}>
        <Text style={{ color: '#999999', fontWeight: 'bold'}}>{ category }</Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>{ Title }</Text>
      </View>
      <View style={{width: '100%', padding: 10}}>
        <Text style={{ fontSize: 14, fontWeight: 'bold'}}>Informações</Text>
        <Text style={{ color: '#999999' }}>
          Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.
        </Text>
      </View>
      <View >
        <TouchableOpacity style={styles.buttonBuy} onPress={ () => navigation.navigate('AddCart', { urlImg, category, Title })}>
          <Text style={{fontSize: 14, color: 'white'}}>Comprar agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonBuy: {
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