import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, {useState} from 'react';
import LogoPex from '../images/LogoPex.svg';
import BuyIcon from '../images/BuyIcon.svg';
import BuyIconFocus from '../images/BuyIconFocus.svg';
import NotificationIcon from '../images/NotificationIcon.svg'
import MainBanner from '../images/MainBanner.jpeg';
import SaleIcon from '../images/SaleIcon.svg';
import ProductCard from '../components/ProductCard';
import OfferCard from '../components/OfferCard';
import Products from '../utils/listProducts';
import BrandImage1 from '../images/BrandImage1.svg';
import BrandImage2 from '../images/BrandImage2.svg';
import BrandImage3 from '../images/BrandImage3.svg';
import BrandImage4 from '../images/BrandImage4.svg';
import { Banners } from '../utils/listProducts';
import Category from '../images/Category.svg';
import BookMark from '../images/BookMark.svg';
import Profile from '../images/Profile.svg';

const data = [
  {
    id: 1,
    title: 'Todas'
  },
  {
    id: 2,
    title: 'Ofertas'
  },
  {
    id: 3,
    title: 'Pisos e porcelanatos'
  },
  {
    id: 4,
    title: 'Tijolos'
  },
  {
    id: 5,
    title: 'Cimentos'
  }
]

const Item = ({ item, onPress, styleButton, colorText }) => (
  <View style={{ padding: 5 }}>
    <TouchableOpacity onPress={onPress} style={ styleButton }>
      <Text style={{ color: colorText, fontWeight: 'bold'}}>{item.title}</Text>
    </TouchableOpacity>
  </View>
)

export default function Main({ navigation }) {
  const [selectedId, setSelectedId] = useState(1);

  const redirect = navigation;
  const RenderItem = ({ item }) => {
    const styleButton = item.id === selectedId ? styles.buttonFocus : styles.button;
    const colorText = item.id ===selectedId ? 'white' : 'black';

    return (
      <Item item={ item } onPress={() => setSelectedId(item.id)} styleButton={styleButton} colorText={colorText} />
    )
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 40, paddingLeft: 20, paddingRight: 20}}>
        <View>
          <LogoPex />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 140}}>
          <TouchableOpacity onPress={ () => navigation.navigate('Cart') }><BuyIcon width="30px" height="30px"/></TouchableOpacity>
          <TouchableOpacity><NotificationIcon width="30px" height="30px"/></TouchableOpacity>
        </View>
      </View>
      <ImageBackground source={MainBanner}  style={{ marginTop: 40, height: 200,  }} resizeMode="cover">
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: 40, height: 200 }}>
          <Text style={{width: 215, color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' }}>Tudo com frete grátis</Text>
          <Text style={{ width: 105, borderBottomColor: 'white', color: 'white', borderBottomWidth: 1, fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 18}}>Comprar agora</Text>
        </View>
      </ImageBackground >
      <View>
        <Text style={{textAlign: 'center', marginTop: 24, fontWeight: 'bold'}}>Categorias</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 27}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', padding: 20}}>Produtos populares</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            Products.map(({urlImg, category, Title}, index) => (
              <View style={{ padding: 10 }} key={index}>
                <View style={{ padding: 10, borderWidth: 1, borderColor: '#F1F0F3', width: 151, borderRadius: 12, alignItems: 'center', minHeight: 223 }}>
                  <ProductCard urlImg={urlImg} category={category} Title={Title} navigation={redirect}/>
                </View>
              </View>
            ))
          }
        </ScrollView>
      </View>
      <View style={{ paddingTop: 10, paddingBottom: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ minWidth: 280 }}>
          <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ marginLeft: 25, marginRight: 25, width: 66 }}>
              <BrandImage1 />
            </View>
            <View style={{ marginLeft: 25, marginRight: 25, width: 97 }}>
              <BrandImage2 />
            </View>
            <View style={{ marginLeft: 25, marginRight: 25, width: 54 }}>
              <BrandImage3 />
            </View>
            <View style={{ marginLeft: 25, marginRight: 25, width: 40 }}>
              <BrandImage4 />
            </View>
          </View>
        </ScrollView>
      </View>
      <View>
          { 
            Banners.map(({urlImg, emphasis, title, offer }, index) => (
              <View style={{paddingTop: 1, paddingBottom: 1}} key={index}>
                <OfferCard urlImg={urlImg} emphasis={emphasis} title={title} offer={offer}/>
              </View>
            ))
          }
      </View>
      <View style={{ height: 112, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 20}}>
          <TouchableOpacity style={{ alignItems: 'center', height: 42 }} >
            <BuyIconFocus width="30px" height="30px"/>
            <Text style={{ color: '#7960FB'}}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', height: 42 }}>
            <Category width="30px" height="30px"/>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', height: 42 }} onPress={ () => navigation.navigate('Orders') }>
            <BookMark width="30px" height="30px"/>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', height: 42 }} onPress={ () => navigation.navigate('Profile') }>
            <Profile width="30px" height="30px"/>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  buttonFocus: {
    minWidth: 66,
    height: 36,
    backgroundColor: '#7B61FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 52,
    paddingTop: 6,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  button: {
    minWidth: 66,
    height: 36,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 52,
    borderWidth: 1,
    borderColor: '#F1F0F3',
    paddingTop: 6,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
  }
});