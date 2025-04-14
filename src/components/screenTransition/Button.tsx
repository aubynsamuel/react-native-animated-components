import {StyleSheet, TouchableOpacity} from 'react-native';

import Text from '@/src/components/common/Text';
import {ButtonProps} from './types';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';
import {MED_FONT_UPSCALE_FACTOR} from '@/src/utils/device';

const Button = ({style, label, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPressIn={onPress}
      activeOpacity={0.5}
      style={[styles.container, style]}>
      <Text
        style={styles.label}
        maxFontSizeMultiplier={MED_FONT_UPSCALE_FACTOR}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLACK,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
  },
  label: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.WHITE,
    fontFamily: typography.semiBold,
  },
});
