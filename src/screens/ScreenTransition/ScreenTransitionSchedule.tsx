import {StyleSheet, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {isIOS} from '@/src/utils/device';
import {Colors} from '@/src/utils/colors';
import ScheduleHeader from '@/src/components/screenTransition/ScheduleHeader';
import FadeInTransition from '@/src/components/screenTransition/FadeInTransition';
import ScheduleCalendar from '@/src/components/screenTransition/ScheduleCalendar';
import ScheduleTimeEvents from '@/src/components/screenTransition/ScheduleTimeEvents';

const ScreenTransitionSchedule = () => {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  const paddingTop =
    insets.top > 24 ? (isIOS ? insets.top : insets.top + 12) : 32;
  const bottom = insets.top <= 52 ? 30 : insets.bottom + 8;
  const paddingBottom = 312 + bottom;

  return (
    <View style={[styles.container, {paddingTop}]}>
      <FadeInTransition
        index={0}
        direction="left"
        animate={isFocused}
        containerStyle={styles.spaceHor}>
        <ScheduleHeader />
      </FadeInTransition>
      <FadeInTransition
        index={1}
        direction="top"
        animate={isFocused}
        containerStyle={[styles.spaceTop, styles.smSpaceHor]}>
        <ScheduleCalendar index={1.1} />
      </FadeInTransition>
      <FadeInTransition
        index={2}
        animate={isFocused}
        containerStyle={[styles.spaceTop, styles.spaceHor]}>
        <ScheduleTimeEvents contentContainerStyle={{paddingBottom}} />
      </FadeInTransition>
    </View>
  );
};

export default ScreenTransitionSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  spaceHor: {
    paddingHorizontal: 24,
  },
  spaceTop: {
    marginTop: 24,
  },
  smSpaceHor: {
    marginHorizontal: 8,
  },
});
