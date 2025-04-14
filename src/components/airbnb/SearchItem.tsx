import AntDesign from '@expo/vector-icons/AntDesign';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Text from '@/src/components/common/Text';
import {TSearchItem} from './types';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';

const SearchItem = ({place, date, guests}: TSearchItem) => (
  <TouchableOpacity
    activeOpacity={0.65}
    style={[styles.row, styles.alignCenter, styles.marBot24]}>
    <View style={styles.searchClockContainer}>
      <AntDesign name="clockcircleo" size={25} color={'black'} />
    </View>
    <View>
      <View style={styles.row}>
        <Text style={styles.font17}>{place}</Text>
        <Text style={styles.font17}> • Stays</Text>
      </View>
      <View style={[styles.row, styles.marTop4]}>
        <Text style={styles.subtitle}>{date}</Text>
        <Text style={styles.subtitle}>{` • ${guests} guests`}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default SearchItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  marTop4: {
    marginTop: 4,
  },
  marBot24: {
    marginBottom: 24,
  },
  searchClockContainer: {
    padding: 16,
    backgroundColor: Colors.ANTI_FLASH_WHITE,
    borderRadius: 10,
    marginRight: 16,
  },
  font17: {
    fontSize: 16,
    fontFamily: typography.medium,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.QUARTZ,
    fontFamily: typography.regular,
  },
});
