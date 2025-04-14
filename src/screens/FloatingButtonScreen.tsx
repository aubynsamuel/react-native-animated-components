import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import {WIDTH} from '@/src/utils/device';
import {Colors} from '@/src/utils/colors';
import StatusBarManager from '@/src/components/common/StatusBarManager';
import {FAKE_ARRAY, SPACING} from '@/src/components/floatingButton/data';
import FloatingContent from '@/src/components/floatingButton/FloatingContent';
import FloatingElement from '@/src/components/floatingButton/FloatingElement';

const FakeItem = ({index}: {index: number}) => {
  const RANDOM_NUM1 = Math.floor(Math.random() * 255);
  const RANDOM_NUM2 = Math.floor(Math.random() * 255);
  const RANDOM_NUM3 = Math.floor(Math.random() * 255);

  const itemStyle = {
    marginRight: index % 2 === 0 ? SPACING : 0,
    backgroundColor: `rgb(${RANDOM_NUM1},${RANDOM_NUM2},${RANDOM_NUM3})`,
  };

  return <TouchableOpacity style={[styles.item, itemStyle]} />;
};

const FloatingButton = () => {
  const insets = useSafeAreaInsets();

  const renderItem = ({index}: {index: number}) => (
    <FakeItem key={index} index={index} />
  );

  return (
    <>
      <StatusBarManager />
      <View style={[styles.positionItems, {paddingTop: insets.top}]}>
        <FlatList
          numColumns={2}
          data={FAKE_ARRAY}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
        <FloatingElement
          snapHeight={310}
          iconTintColor={'#FFF'}
          content={<FloatingContent />}
          containerStyle={[styles.container, {bottom: insets.bottom + 24}]}
        />
      </View>
    </>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    position: 'absolute',
    backgroundColor: Colors.EERIE_BLACK,
    padding: 24,
  },
  item: {
    width: (WIDTH - SPACING * 3) / 2,
    height: (WIDTH - SPACING * 3) / 2,
    marginBottom: SPACING,
  },
  positionItems: {
    alignItems: 'center',
  },
});
