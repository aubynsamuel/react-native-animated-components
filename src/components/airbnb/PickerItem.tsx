import {Pressable, StyleSheet} from 'react-native';

import Text from '@/src/components/common/Text';
import {WIDTH} from '@/src/utils/device';
import {TPickerItem} from './types';
import {typography} from '@/src/utils/typography';

const PickerItem = ({label, onPress, style}: TPickerItem) => (
  <Pressable onPress={onPress} style={[styles.pickerItem, style]}>
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);

export default PickerItem;

const styles = StyleSheet.create({
  pickerItem: {
    width: (WIDTH - 89) / 3,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 20,
  },
  label: {
    fontFamily: typography.semiBold,
  },
});
