import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { COLORS, SPACING } from '../../theme/theme';
import DealsCarousel from './components/DealsCarousel';
import CategoryGrid from './components/CategoryGrid';
import RecommendedProducts from './components/RecommendedProducts';
import Header from '../../components/common/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <DealsCarousel />
          <CategoryGrid />
          <RecommendedProducts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.md,
  },
});

export default HomeScreen; 