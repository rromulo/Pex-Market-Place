import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowRigth from '../images/ArrowRight.svg';

export default function OfferCard(props) {
  const {urlImg, emphasis, title, offer } = props;
  return (
    <ImageBackground source={urlImg} resizeMode="cover">
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', paddingTop: 55, paddingBottom: 40, height: 166, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <View>
          <View width={emphasis === "50% Off" ? 62 : 150}>
            {emphasis && (
              <Text style={{ backgroundColor: '#FFFFFF', color: 'rgba(0, 0, 0, 0.4)', paddingLeft: 2, fontSize: 14, fontWeight: 'bold' }}>
                {emphasis}  
              </Text>
            )}
          </View>
          <View style={{width: 185}}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 27}}>{title}</Text>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12}}>{offer}</Text>
          </View>
        </View>
        <TouchableOpacity style={{backgroundColor: 'white', width: 48, height: 48, borderRadius: 76, alignItems: 'center', justifyContent: 'center' }}>
          <ArrowRigth />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}