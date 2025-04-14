import {StyleSheet, View} from 'react-native';

import Text from '@/src/components/common/Text';
import {TLegendItem} from './types';
import {typography} from '@/src/utils/typography';
import {MED_FONT_UPSCALE_FACTOR} from '@/src/utils/device';

const LegendItem = ({label, color}: TLegendItem) => {
  return (
    <View style={styles.itemContainer}>
      <View style={[styles.itemDot, {backgroundColor: color}]} />
      <Text
        style={styles.itemLabel}
        maxFontSizeMultiplier={MED_FONT_UPSCALE_FACTOR}>
        {label}
      </Text>
    </View>
  );
};

export default LegendItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemDot: {
    width: 20,
    height: 20,
    borderRadius: 6,
    marginRight: 5,
  },
  itemLabel: {
    fontSize: 12,
    fontFamily: typography.semiBold,
  },
});
