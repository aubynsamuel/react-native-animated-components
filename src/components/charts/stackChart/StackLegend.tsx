import Animated, {
  withTiming,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';

import Text from '@/src/components/common/Text';
import {TStackLegend} from './types';
import {typography} from '@/src/utils/typography';
import {colors, EXPENSES_TYPES} from './constants';
import {MED_FONT_UPSCALE_FACTOR} from '@/src/utils/device';

const StackLegend = ({animate, selectedIndex}: TStackLegend) => {
  return (
    <View style={styles.container}>
      {EXPENSES_TYPES.map((item, index) => {
        const style = useAnimatedStyle(() => ({
          opacity:
            selectedIndex === null
              ? interpolate(
                  animate.value,
                  [index * 0.25, (index + 1) * 0.25],
                  [0, 1],
                )
              : withTiming(selectedIndex === index ? 1 : 0.25),
          flexDirection: 'row',
          alignItems: 'center',
        }));

        return (
          <Animated.View key={index} style={style}>
            <View
              style={{
                ...styles.dot,
                backgroundColor:
                  colors?.[item?.toLowerCase() as keyof typeof colors],
              }}
            />
            <Text
              style={styles.label}
              maxFontSizeMultiplier={MED_FONT_UPSCALE_FACTOR}>
              {item}
            </Text>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default StackLegend;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 12,
    height: 12,
    marginRight: 4,
    borderRadius: 3,
  },
  label: {
    fontSize: 10,
    fontFamily: typography.medium,
    marginRight: 16,
  },
});
