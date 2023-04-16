import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import ArrowLeft from '../images/ArrowLeft.svg'
import BookMark from '../images/BookMark.svg';
import ImageBanner from '../images/imageBanner.jpeg';
import ListImage from '../images/listImage.jpeg';


export default function GaleryProduct({ navigation, route }) {
  const { urlImg, category, Title } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingTop: 30}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding: 30}}>
        <TouchableOpacity onPress={ () => navigation.navigate('Product', { urlImg, category, Title }) }><ArrowLeft /></TouchableOpacity>
        <Text style={{ fontWeight: 'bold' }}>Torneira Hansgrohe</Text>
        <TouchableOpacity>
          <BookMark />
        </TouchableOpacity>
      </View>
      <ImageBackground source={ImageBanner} resizeMode="cover" style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: 39, paddingRight: 32 }}>
        <TouchableOpacity>
          <Image source={ ListImage } style={{ borderRadius: 12}} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}