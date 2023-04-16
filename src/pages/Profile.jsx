import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LogoPex from '../images/LogoPex.svg';
import UserPicture from '../images/userPicture.svg';
import Union from '../images/union.svg';
import Faq from '../images/faq.svg';
import Quit from '../images/quit.svg';
import Support from '../images/support.svg'
import Cotation from '../images/cotationIcon.svg'
import BuyIcon from '../images/BuyIcon.svg';
import Category from '../images/Category.svg';
import BookMark from '../images/BookMark.svg';
import ProfilePic from '../images/ProfileFocus.svg';

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 80, backgroundColor: '#FFFFFF'}}>
      <LogoPex />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
          <UserPicture />
          <View>
            <Text style={{ fontWeight: 'bold'}}>Olá, Maria</Text>
            <Text style={{ color: '#999999'}}>maria@velty.com.br</Text>
          </View>
        </View>
        <Union />
      </View>

      <View style={{ marginTop: 30}}>
        <Text style={{ fontWeight: 'bold'}}>Sua conta PEX</Text>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#F1F0F3', paddingBottom: 20}} onPress={ () => navigation.navigate('Orders') }>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
            <Cotation />
            <Text> Cotações</Text>
          </TouchableOpacity>
          <Union />
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#F1F0F3', paddingBottom: 20}}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '40%'}}>
            <Support />
            <Text> Ajuda e suporte</Text>
          </TouchableOpacity>
          <Union />
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
            <Faq />
            <Text> FAQ</Text>
          </TouchableOpacity>
          <Union />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 60 }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }} onPress={ () => navigation.navigate('Login') }>
            <Quit />
            <Text style={{ color: '#EA5B5B'}}> Sair da conta</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 112, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 220, padding: 10}}>
          <TouchableOpacity style={{ alignItems: 'center', height: 42 }} onPress={ () => navigation.navigate('Main') }>
            <BuyIcon width="30px" height="30px"/>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', height: 42 }}>
            <Category width="30px" height="30px"/>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', height: 42 }} onPress={ () => navigation.navigate('Orders') }>
            <BookMark width="30px" height="30px"/>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', height: 42 }} onPress={ () => navigation.navigate('Profile') }>
            <ProfilePic width="30px" height="30px"/>
            <Text style={{ color: '#7960FB'}}>Perfil</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}