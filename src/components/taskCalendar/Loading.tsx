import {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {TLoading} from './types';
import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';

const Loading = ({loading, stopLoading}: TLoading) => {
  let timeout: ReturnType<typeof setTimeout> = setTimeout(() => {});

  useEffect(() => {
    timeout = setTimeout(() => {
      !!stopLoading && stopLoading();
    }, 600);

    return () => {
      !!timeout && clearTimeout(timeout);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'small'} color={'white'} />

      <Text style={styles.label}>Retrieving tasks</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 400,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    zIndex: 1,
  },
  label: {
    fontSize: 15,
    fontFamily: typography.medium,
    color: Colors.WHITE,
  },
});
