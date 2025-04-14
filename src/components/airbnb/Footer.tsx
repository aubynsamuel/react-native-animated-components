import Entypo from '@expo/vector-icons/Entypo';
import {Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {TFooter} from './types';
import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {HEIGHT, WIDTH} from '@/src/utils/device';
import {typography} from '@/src/utils/typography';

const Footer = ({onPressClear, animateClose}: TFooter) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.row,
        styles.justifyBtn,
        styles.padHor24,
        styles.marTop4,
        styles.widthCenter,
        HEIGHT > 800 ? styles.height : {height: 48 + (insets.bottom || 24)},
        {paddingBottom: insets.bottom},
      ]}>
      <Pressable style={styles.padding8} onPress={onPressClear}>
        <Text style={styles.clearAll}>Clear all</Text>
      </Pressable>
      <Pressable
        onPress={animateClose}
        style={[styles.row, styles.searchBtn, styles.alignCenter]}>
        <Entypo size={20} style={styles.lens3} name="magnifying-glass" />
        <Text style={styles.search}>Search</Text>
      </Pressable>
    </View>
  );
};

export default Footer;

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
  padHor24: {
    paddingHorizontal: 24,
  },
  marTop4: {
    marginTop: 4,
  },
  widthCenter: {
    width: WIDTH,
    alignItems: 'center',
  },
  padding8: {
    padding: 8,
  },
  searchBtn: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.SPANISH_CRIMSON,
  },
  search: {
    color: Colors.WHITE,
    fontFamily: typography.semiBold,
  },
  clearAll: {
    fontSize: 16,
    fontFamily: typography.semiBold,
    textDecorationLine: 'underline',
  },
  lens3: {
    paddingRight: 8,
    color: Colors.WHITE,
  },
  height: {
    height: 100,
  },
});
