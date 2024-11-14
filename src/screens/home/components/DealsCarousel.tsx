import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { COLORS, SPACING } from '../../../theme/theme';
import DealCard from './DealCard';

const { width } = Dimensions.get('window');

const deals = [
  {
    id: '1',
    title: 'Premium Headphones',
    description: 'Get 50% off on our premium headphones',
    price: 1000,
    originalPrice: 2000,
    image: 'https://example.com/headphones.jpg',
    discount: 50,
  },
  // Add more deals...
];

const DealsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width - SPACING.md * 2}
        height={200}
        autoPlay
        data={deals}
        scrollAnimationDuration={1000}
        onSnapToItem={setActiveIndex}
        renderItem={({ item }) => (
          <DealCard
            title={item.title}
            description={item.description}
            price={item.price}
            originalPrice={item.originalPrice}
            image={item.image}
            discount={item.discount}
          />
        )}
      />
      <View style={styles.pagination}>
        {deals.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.lg,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.textSecondary,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: COLORS.primary,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default DealsCarousel; 