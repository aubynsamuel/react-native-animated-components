import {Animated, StyleSheet} from 'react-native';

import {data} from './data';
import {WIDTH} from '@/src/utils/device';
import {Colors} from '@/src/utils/colors';
import {TIndicator, TMeasure} from './types';

const Indicator = ({measures, scrollX}: TIndicator) => {
  const inputRange = data.map((_, i) => i * WIDTH);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure: TMeasure) => measure.width),
  });
  const indicatorLeft = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure: TMeasure) => measure.x),
  });

  return (
    <Animated.View
      style={[styles.container, {width: indicatorWidth, left: indicatorLeft}]}
    />
  );
};

export default Indicator;

const styles = StyleSheet.create({
  container: {
    height: 3,
    backgroundColor: Colors.WHITE,
    bottom: -10,
    position: 'absolute',
  },
});
