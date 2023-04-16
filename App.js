import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Register from './src/pages/Register';
import RegisterS2 from './src/pages/RegisterS2'
import Terms from './src/pages/TermsAndCondinations';
import FaceId from './src/pages/FaceId';
import Main from './src/pages/Main';
import Product from './src/pages/Product';
import DetailsProduct from './src/pages/DetailsProduct';
import AddCart from './src/pages/AddCart';
import Profile from './src/pages/Profile';
import ShoppingCart from './src/pages/ShoppingCart';
import Orders from './src/pages/Orders';
import Galery from './src/pages/GaleryProduct';
import ListOrders from './src/pages/ListOrders';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <>
          <Stack.Screen name="Home" component={Home} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="Login" component={Login} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="Register" component={Register} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="Terms" component={Terms} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="RegisterS2" component={RegisterS2} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="FaceId" component={FaceId} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="Main" component={Main} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          
          />
          <Stack.Screen name="Product" component={Product} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          
          />
          <Stack.Screen name="Details Product" component={DetailsProduct} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          
          />
          <Stack.Screen name="AddCart" component={AddCart} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="Profile" component={Profile} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="Cart" component={ShoppingCart} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="Orders" component={Orders} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="Galery" component={Galery} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
          <Stack.Screen name="ListOrders" component={ListOrders} options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          />
        </>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
