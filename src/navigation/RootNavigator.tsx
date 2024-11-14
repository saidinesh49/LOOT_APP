import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import MainTabNavigator from './MainTabNavigator';
import AuthScreen from '../screens/auth/AuthScreen';
import ProductDetailsScreen from '../screens/product/ProductDetailsScreen';
import CheckoutScreen from '../screens/checkout/CheckoutScreen';
import ReelViewScreen from '../screens/reels/ReelViewScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetailsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="ReelView" component={ReelViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator; 