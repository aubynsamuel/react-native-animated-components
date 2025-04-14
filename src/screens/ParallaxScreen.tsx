import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {data} from '@/src/components/parallax/data';
import StatusBarManager from '../components/common/StatusBarManager';
import {ParallaxListItemProps} from '@/src/components/parallax/types';
import ImplementedWith from '@/src/components/parallax/ImplementedWith';
import ParallaxListItem from '@/src/components/parallax/ParallaxListItem';

const ParallaxScreen = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const renderItem = React.useCallback(
    ({item, index}: ParallaxListItemProps) => (
      <ParallaxListItem item={item} index={index} scrollX={scrollX} />
    ),
    [],
  );

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: true},
  );

  return (
    <>
      <StatusBarManager barStyle="dark" />

      <View style={styles.container}>
        <ImplementedWith />
        <Animated.FlatList
          data={data}
          horizontal
          pagingEnabled
          onScroll={onScroll}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default ParallaxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
