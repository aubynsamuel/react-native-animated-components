import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';

import {Colors} from '@/src/utils/colors';
import NumberItem from '@/src/components/pinCode/NumberItem';
import Placeholder from '@/src/components/pinCode/Placeholder';
import {DATA, PLACEHOLDERS} from '@/src/components/pinCode/data';
import {PlaceholderFunction} from '@/src/components/pinCode/types';
import StatusBarManager from '@/src/components/common/StatusBarManager';

const PinCode = () => {
  const translateX = useSharedValue(0);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const inputsRef = [
    React.useRef<PlaceholderFunction>(),
    React.useRef<PlaceholderFunction>(),
    React.useRef<PlaceholderFunction>(),
    React.useRef<PlaceholderFunction>(),
  ];

  const renderItem = ({item, index}: {item: number; index: number}) => {
    if (index === 9) return <View style={styles.empty} />;

    return (
      <NumberItem
        inputsRef={inputsRef}
        value={index === 10 ? 0 : index === 11 ? 'icon' : item}
        input={input}
        setInput={setInput}
        disabled={loading}
        setLoading={setLoading}
        translateX={translateX}
      />
    );
  };

  const animStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <>
      <StatusBarManager barStyle="light" />
      <View style={styles.container}>
        {/* Placeholder  */}
        <Animated.View style={[animStyle, styles.placeholderContainer]}>
          <View style={styles.rowBetween}>
            {PLACEHOLDERS.map((_, index) => (
              <Placeholder ref={inputsRef[index]} key={index} />
            ))}
          </View>
        </Animated.View>

        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size={'small'} color={'white'} />
          </View>
        )}

        {/* Numbers */}
        <FlatList
          bounces={false}
          data={DATA}
          renderItem={renderItem}
          numColumns={3}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CHINESE_BLACK,
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeholderContainer: {
    width: 200,
    height: '25%',
    marginBottom: 48,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  empty: {
    margin: 8,
    width: 90,
    height: 90,
  },
  loading: {
    position: 'absolute',
    top: '12%',
  },
});

export default PinCode;
