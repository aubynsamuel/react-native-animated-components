import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {WIDTH} from '@/src/utils/device';
import {Colors} from '@/src/utils/colors';
import Tabs from '@/src/components/listWithIndicator/Tabs';
import {data} from '@/src/components/listWithIndicator/data';
import {ListItem} from '@/src/components/listWithIndicator/types';
import StatusBarManager from '../components/common/StatusBarManager';
import ImplementedWith from '@/src/components/listWithIndicator/ImplementedWith';
import ListWithIndicatorItem from '@/src/components/listWithIndicator/ListWithIndicatorItem';

const ListWithIndiScreen = () => {
  const flatRef = React.useRef<any>();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onItemPress = React.useCallback((itemIndex: number) => {
    !!flatRef.current &&
      flatRef.current.scrollToOffset({
        offset: itemIndex * WIDTH,
      });
  }, []);

  const renderItem = React.useCallback(
    ({item}: ListItem) => <ListWithIndicatorItem item={item} />,
    [],
  );

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  return (
    <>
      <StatusBarManager barStyle="light" />

      <View style={styles.container}>
        <ImplementedWith />
        <Animated.FlatList
          ref={flatRef}
          data={data}
          horizontal
          bounces={false}
          pagingEnabled
          onScroll={onScroll}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.key}
          renderItem={renderItem}
        />
        <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListWithIndiScreen;
