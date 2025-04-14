import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';

import {SLIDER_W} from './data';
import {TAnimatedText} from './types';
import {typography} from '@/src/utils/typography';

const AnimatedText = ({
  index,
  char,
  coloring,
  sliderWidth,
  totalCharsLength,
  maxFontSizeMultiplier,
}: TAnimatedText) => {
  const textColor = useAnimatedStyle(() => {
    const interval = 1 / (totalCharsLength + 8);

    return {
      opacity: interpolate(sliderWidth.value, [SLIDER_W, 260], [1, 0]),
      color: interpolateColor(
        coloring.value,
        [
          0.2 + (index - 3) * interval,
          0.2 + (index - 2) * interval,
          0.2 + (index - 1) * interval,
          0.2 + index * interval,
          0.2 + (index + 1) * interval,
          0.2 + (index + 2) * interval,
          0.2 + (index + 3) * interval,
        ],
        [
          '#a10000',
          '#ff6161',
          '#ffad9c',
          '#ffffff',
          '#ffad9c',
          '#ff6161',
          '#a10000',
        ],
      ),
    };
  });

  return (
    <Animated.Text
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      key={`index-${index}`}
      style={[textColor, styles.text]}>
      {char}
    </Animated.Text>
  );
};

export default AnimatedText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: typography.medium,
  },
});
