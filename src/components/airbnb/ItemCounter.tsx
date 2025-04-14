import {StyleSheet, View} from 'react-native';

import {
  WIDTH,
  SM_FONT_UPSCALE_FACTOR,
  MED_FONT_UPSCALE_FACTOR,
} from '@/src/utils/device';
import Text from '@/src/components/common/Text';
import {TItemCounter} from './types';
import {Colors} from '@/src/utils/colors';
import CounterBtn from './CounterBtn';
import {typography} from '@/src/utils/typography';

const ItemCounter = ({
  label,
  subLabel,
  subLabelStyle,
  value,
  setValue,
  extraOnPress,
  disabledLeft,
}: TItemCounter) => (
  <View
    style={[
      styles.row,
      styles.justifyBtn,
      styles.alignCenter,
      styles.itemCounterContainer,
    ]}>
    <View>
      <Text
        style={styles.font16}
        maxFontSizeMultiplier={MED_FONT_UPSCALE_FACTOR}>
        {label}
      </Text>
      <Text
        style={[styles.subtitle, subLabelStyle, styles.marTop4]}
        maxFontSizeMultiplier={SM_FONT_UPSCALE_FACTOR}>
        {subLabel}
      </Text>
    </View>
    <View style={[styles.row, styles.alignCenter]}>
      <CounterBtn
        isPlus={false}
        disabled={value <= 0 || disabledLeft}
        onPress={() => {
          setValue((old: number) => old - 1);
        }}
      />
      <Text
        style={[
          styles.fontW500,
          styles.font16,
          styles.textCenter,
          value < 10 ? styles.minWidth30 : styles.minWidth36,
        ]}>
        {value}
      </Text>
      <CounterBtn
        isPlus
        onPress={() => {
          setValue((old: number) => {
            !!extraOnPress && extraOnPress(old + 1);
            return old + 1;
          });
        }}
      />
    </View>
  </View>
);

export default ItemCounter;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  justifyBtn: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  itemCounterContainer: {
    width: WIDTH - 80,
    marginHorizontal: 24,
  },
  font16: {
    fontSize: 16,
    fontFamily: typography.medium,
  },
  textCenter: {
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.QUARTZ,
    fontSize: 12,
    fontFamily: typography.regular,
  },
  marTop4: {
    marginTop: 4,
  },
  fontW500: {
    fontFamily: typography.medium,
  },
  minWidth30: {
    minWidth: 30,
  },
  minWidth36: {
    minWidth: 36,
  },
});
