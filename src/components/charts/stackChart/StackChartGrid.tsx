import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

import {Colors} from '@/src/utils/colors';
import {TStackChartGrid} from './types';
import {typography} from '@/src/utils/typography';
import {chartHeight, chartWidth} from './constants';
import {SM_FONT_UPSCALE_FACTOR} from '@/src/utils/device';

const StackChartGrid = ({valueLabels, animate}: TStackChartGrid) => {
  return (
    <View style={[styles.container, {width: chartWidth}]}>
      {valueLabels.map((label, index) => {
        const animatedText = useAnimatedStyle(() => ({
          opacity: interpolate(
            animate.value,
            [(index - 1) * 0.25, index * 0.25],
            [0, 1],
          ),
        }));

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <View
                style={[
                  styles.verticalLine,
                  {height: chartHeight, left: index * (chartWidth / 4) + 4},
                ]}
              />
            )}
            <Animated.Text
              maxFontSizeMultiplier={SM_FONT_UPSCALE_FACTOR}
              style={[
                index === 0 && styles.moveZero,
                animatedText,
                styles.value,
              ]}>
              {label}
            </Animated.Text>
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default StackChartGrid;

const styles = StyleSheet.create({
  container: {
    left: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verticalLine: {
    width: 1,
    bottom: -20,
    position: 'absolute',
    backgroundColor: Colors.LIGHT_GRAY,
  },
  value: {
    textAlign: 'right',
    fontSize: 9,
    color: Colors.OUTER_SPACE,
    fontFamily: typography.regular,
  },
  moveZero: {
    left: -12,
  },
});
