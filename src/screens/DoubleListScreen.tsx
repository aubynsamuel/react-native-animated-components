import {
  View,
  Alert,
  Animated,
  FlatList,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';

import data from '@/src/assets/doubleList';
import List from '@/src/components/doubleList/List';
import {HEIGHT_SCR, WIDTH} from '@/src/utils/device';
import Item from '@/src/components/doubleList/ConnectListItem';
import ConnectButton from '@/src/components/doubleList/ConnectButton';
import StatusBarManager from '@/src/components/common/StatusBarManager';
import ImplementedWith from '@/src/components/doubleList/ImplementedWith';
import ConnectWithText from '@/src/components/doubleList/ConnectWithText';
import {colors, ITEM_HEIGHT} from '@/src/components/doubleList/constants';

const DoubleListScreen = () => {
  const [index, setIndex] = React.useState(0);

  const yellowRef = React.useRef();
  const darkRef = React.useRef<FlatList>();
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const onConnectPress = React.useCallback(() => {
    Alert.alert('Connect with:', data?.[index]?.name?.toUpperCase());
  }, [index]);

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
  );
  const onItemIndexChanged = React.useCallback(setIndex, []);

  React.useEffect(() => {
    scrollY.addListener(v => {
      if (darkRef?.current) {
        darkRef.current.scrollToOffset({
          offset: v.value,
          animated: false,
        });
      }
    });
  }, []);

  return (
    <>
      <StatusBarManager barStyle="light" />

      <View style={styles.container}>
        <ImplementedWith />
        <ConnectWithText />
        <List
          color={colors.yellow}
          ref={yellowRef}
          onScroll={onScroll}
          onItemIndexChanged={onItemIndexChanged}
          style={StyleSheet.absoluteFillObject}
        />
        <List
          showText={true}
          color={colors.dark}
          ref={darkRef}
          style={styles.list}
        />
        <ConnectButton onPress={onConnectPress} />
        <Item />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.dark,
  },
  list: {
    position: 'absolute',
    backgroundColor: colors.yellow,
    width: WIDTH,
    height: ITEM_HEIGHT,
    top: HEIGHT_SCR / 2 - ITEM_HEIGHT / 2,
  },
});

export default DoubleListScreen;
