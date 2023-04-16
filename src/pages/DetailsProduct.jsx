import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowLeft from '../images/ArrowLeft.svg';
import Unorderedlist from 'react-native-unordered-list';

export default function DetailsProduct({ navigation, route }) {
  const { urlImg, category, Title } = route.params;
  const otherInfos = [
    {key: "Style: Summer Hat"},
    {key: "Design: Plain"},
    {key: "Fabric: Jersey"},
  ]
  const details = [
    {key: "Materials: 100% cotton, and lining Structured"},
    {key: "Adjustable cotton strap closure"},
    {key: "High quality embroidery stitching"},
    {key: "Head circumference: 21” - 24” / 54-62 cm"},
    {key: "Embroidery stitching"},
    {key: "One size fits most"},
  ]
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', paddingTop: 60}}>
      <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: 'white', flex: 1, marginTop: 56 }}>
        <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={{ width: "5%" }} onPress={ () => navigation.navigate('Product', { urlImg, category, Title })}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={{width: "95%", textAlign: 'center', fontWeight: 'bold'}}>Detalhes do produto</Text>
        </View>
        <View style={{ borderBottomWidth: 1, padding: 10, borderBottomColor: '#F1F0F3' }}>
          <Text style={{ fontWeight: 'bold' }}>Descrição</Text>
          <Text style={{ color: '#999999', marginTop: 8}}>
            Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.
          </Text>
        </View>
        <View style={{ borderBottomWidth: 1, padding: 10, borderBottomColor: '#F1F0F3' }}>
          <Text style={{ fontWeight: 'bold' }}>Detalhes</Text>
          {details.map((item, index) => <Unorderedlist key={index} color='#999999'><Text style={{ color: '#999999'}}>{item.key}</Text></Unorderedlist>)}
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Outras informações</Text>
            <FlatList 
              style={{marginTop: 8}}
              data={otherInfos}
              renderItem={({item}) => <Text style={{ color: '#999999'}}>{item.key}</Text>}
            />
        </View>
      </View>
    </View>
  )
}