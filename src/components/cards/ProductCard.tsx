import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../common/Typography';
import { COLORS, SPACING, SIZES } from '../../theme/theme';

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  onPress: () => void;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  image,
  onPress,
  discount,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <FastImage
        source={{ uri: image }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Typography variant="h3" numberOfLines={2}>
            {title}
          </Typography>
          <View style={styles.priceContainer}>
            <Typography variant="h2" color={COLORS.accent}>
              ₹{price}
            </Typography>
            {originalPrice && (
              <Typography
                variant="body"
                color={COLORS.textSecondary}
                style={styles.originalPrice}
              >
                ₹{originalPrice}
              </Typography>
            )}
          </View>
          {discount && (
            <View style={styles.discountBadge}>
              <Typography variant="caption" color={COLORS.text}>
                {discount}% OFF
              </Typography>
            </View>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - SPACING.lg,
    height: 200,
    borderRadius: SIZES.radius.md,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    marginBottom: SPACING.md,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    padding: SPACING.md,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  originalPrice: {
    marginLeft: SPACING.xs,
    textDecorationLine: 'line-through',
  },
  discountBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: COLORS.accent,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: SIZES.radius.sm,
  },
});

export default ProductCard; 