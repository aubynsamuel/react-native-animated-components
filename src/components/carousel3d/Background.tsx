import {Animated, StyleSheet} from 'react-native';

import {WIDTH} from '@/src/utils/device';
import {Colors} from '@/src/utils/colors';
import {BackgroundProps} from './types';
import {IMAGE_WIDTH, SPACING} from './constants';

const Background = ({progress}: BackgroundProps) => {
  return (
    <Animated.View
      style={[
        styles.card,
        {
          transform: [
            {perspective: IMAGE_WIDTH * 4},
            {
              rotateY: progress.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '90deg', '180deg'],
              }),
            },
          ],
        },
      ]}
    />
  );
};

export default Background;

const styles = StyleSheet.create({
  card: {
    width: IMAGE_WIDTH + SPACING * 2,
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    zIndex: -1,
    top: SPACING * 2,
    left: (WIDTH - (IMAGE_WIDTH + SPACING * 2)) / 2,
    bottom: 0,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.2,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backfaceVisibility: 'visible',
  },
});
