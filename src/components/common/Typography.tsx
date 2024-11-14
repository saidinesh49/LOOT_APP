import React from 'react';
import { Text, TextStyle } from 'react-native';
import { FONTS, COLORS } from '../../theme/theme';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: string;
  style?: TextStyle;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = COLORS.text,
  style,
  children,
}) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'h1':
        return { fontSize: 24, fontFamily: FONTS.bold };
      case 'h2':
        return { fontSize: 20, fontFamily: FONTS.semiBold };
      case 'h3':
        return { fontSize: 18, fontFamily: FONTS.medium };
      case 'caption':
        return { fontSize: 12, fontFamily: FONTS.regular };
      default:
        return { fontSize: 14, fontFamily: FONTS.regular };
    }
  };

  return (
    <Text style={[getVariantStyle(), { color }, style]}>
      {children}
    </Text>
  );
};

export default Typography; 