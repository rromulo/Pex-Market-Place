import { View, Text, TouchableOpacity, ScrollView  } from 'react-native';
import React from 'react';
import UpLoad from '../images/Upload.svg';
import ArrowLeft from '../images/ArrowLeft.svg'

export default function TermsAndCondinations({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 20, marginTop: 30 }}>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={ () => navigation.navigate('Register') }>
          <ArrowLeft />
        </TouchableOpacity>
        <TouchableOpacity>
          <UpLoad />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: '#999999'}}>Última atualização: Outubro/2022</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Termos de uso</Text>
      </View>
      <ScrollView style={{ marginTop: 20}} >
        <Text style={{ fontSize: 14, fontWeight: 'bold'}}>1. Termos</Text>
        <Text style={{ color: '#999999'}}>
          Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate.
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold'}}>2. Licença de uso</Text>
        <Text style={{ color: '#999999'}}>
          Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate. Lorem malesuada tempor imperdiet nulla nulla integer et. Tincidunt sit mauris fringilla nunc nibh erat quis auctor. Urna auctor molestie lectus sagittis fringilla tincidunt. Eget justo, odio sit vulputate velit cursus.
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold'}}>2.1. Licença de uso</Text>
        <Text style={{ color: '#999999'}}>
          Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate. Lorem malesuada tempor imperdiet nulla nulla integer et. Tincidunt sit mauris fringilla nunc nibh erat quis auctor. Urna auctor molestie lectus sagittis fringilla tincidunt. Eget justo, odio sit vulputate velit cursus.
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold'}}>2.2. Licença de uso</Text>
        <Text style={{ color: '#999999'}}>
          Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate. Lorem malesuada tempor imperdiet nulla nulla integer et. Tincidunt sit mauris fringilla nunc nibh erat quis auctor. Urna auctor molestie lectus sagittis fringilla tincidunt. Eget justo, odio sit vulputate velit cursus.
        </Text>
      </ScrollView>
      <View style={{alignItems: 'center', padding: 10, width: '100%', position: 'absolute', bottom: 20, alignSelf: 'center' }}>
        <TouchableOpacity style={{
            backgroundColor: '#F09200',
            borderWidth: 0.5, 
            borderColor: 'transparent',
            height: 64, 
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5,
            width: 64,
          }}
        >
          <Text style={{fontSize: 30, color: 'white'}}>↓</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}