import {StyleSheet, View} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';

const ScheduleHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Schedule</Text>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} />
      </View>
    </View>
  );
};

export default ScheduleHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: typography.bold,
    fontSize: 24,
  },
  searchContainer: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.PLATINUM,
  },
});
