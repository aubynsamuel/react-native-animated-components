import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';

const ImplementedWith = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {bottom: insets.bottom + 16}]}>
      <Text style={styles.implemented}>Implemented with:</Text>
      <Text style={styles.label}>Animated API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    zIndex: 100,
  },
  implemented: {
    fontSize: 22,
    color: Colors.WHITE,
    fontFamily: typography.bold,
  },
  label: {
    fontSize: 18,
    color: Colors.WHITE,
    fontFamily: typography.medium,
  },
});

export default ImplementedWith;
