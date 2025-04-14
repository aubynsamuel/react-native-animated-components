import {StyleSheet, View} from 'react-native';

import {isIOS} from '@/src/utils/device';
import {Colors} from '@/src/utils/colors';

const MonthListPickerLines = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lines} />
    </View>
  );
};

export default MonthListPickerLines;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 200,
    width: '100%',
    justifyContent: 'center',
  },
  lines: {
    height: 42,
    width: 200,
    alignSelf: 'center',
    borderBottomColor: Colors.TWO_POINT_BLACK,
    borderTopColor: Colors.TWO_POINT_BLACK,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 2,
    transform: [{translateY: isIOS ? -22 : -19}],
  },
});
