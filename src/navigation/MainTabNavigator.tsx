import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainTabParamList } from './types';
import { COLORS } from '../theme/theme';

import HomeScreen from '../screens/home/HomeScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import LootScreen from '../screens/loot/LootScreen';
import MarketScreen from '../screens/market/MarketScreen';
import AccountScreen from '../screens/account/AccountScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.secondary,
          borderTopColor: COLORS.border,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Loot"
        component={LootScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="gift" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="store" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator; 