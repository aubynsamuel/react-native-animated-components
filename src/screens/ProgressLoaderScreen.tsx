import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Colors} from '@/src/utils/colors';
import Progress from '@/src/components/progressLoader/Progress';
import StatusBarManager from '@/src/components/common/StatusBarManager';
import ImplementedWith from '@/src/components/progressLoader/ImplementedWith';

const ProgressLoaderScreen = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % (10 + 1));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <>
      <StatusBarManager barStyle="dark" />

      <View style={styles.container}>
        <ImplementedWith />
        <Progress step={index} steps={10} height={25} />
      </View>
    </>
  );
};

export default ProgressLoaderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
  },
});
