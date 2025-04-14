import {StyleSheet, View} from 'react-native';

import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';

const ScreenTransitionHomework = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{'You think im lazy?\n😔😔😔'}</Text>
    </View>
  );
};

export default ScreenTransitionHomework;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  label: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: typography.semiBold,
  },
});
