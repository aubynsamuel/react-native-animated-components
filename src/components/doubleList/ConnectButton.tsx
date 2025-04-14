import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Text from '@/src/components/common/Text';
import {HEIGHT_SCR} from '@/src/utils/device';
import {TConnectButtonProps} from './types';
import {typography} from '@/src/utils/typography';
import {colors, ITEM_HEIGHT} from './constants';

const ConnectButton = React.memo(({onPress}: TConnectButtonProps) => {
  return (
    <View style={styles.connectButtonPosition}>
      <View style={styles.line} />
      <TouchableOpacity
        onPress={onPress}
        style={styles.connectButtonContainer}
        activeOpacity={0.8}>
        <Text style={styles.connectButton}>Done!</Text>
      </TouchableOpacity>
    </View>
  );
});

ConnectButton.displayName = 'ConnectButton';

export default ConnectButton;

const styles = StyleSheet.create({
  connectButtonPosition: {
    position: 'absolute',
    paddingHorizontal: 14,
    top: HEIGHT_SCR / 2 + ITEM_HEIGHT / 2,
  },
  connectButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectButton: {
    fontSize: 32,
    color: colors.dark,
    fontFamily: typography.bold,
  },
  line: {
    width: 4,
    height: ITEM_HEIGHT * 2,
    backgroundColor: colors.yellow,
  },
});
