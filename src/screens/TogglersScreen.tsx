import {StyleSheet, View} from 'react-native';

import StatusBarManager from '@/src/components/common/StatusBarManager';
import ImplementedWith from '@/src/components/togglers/ImplementedWith';
import NativeIOSToggle from '@/src/components/togglers/NativeIOSToggle';
import ToggleWithLabel from '@/src/components/togglers/ToggleWithLabel';
import ToggleWithSymbol from '@/src/components/togglers/ToggleWithSymbol';

const TogglersScreen = () => {
  return (
    <>
      <StatusBarManager barStyle="dark" />

      <View style={styles.container}>
        <ImplementedWith />
        <NativeIOSToggle />
        <View style={styles.space} />
        <NativeIOSToggle withTheme />
        <View style={styles.space} />
        <ToggleWithLabel />
        <View style={styles.space} />
        <ToggleWithSymbol />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: {
    paddingVertical: 8,
  },
});

export default TogglersScreen;
