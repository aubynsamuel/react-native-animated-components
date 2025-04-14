import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import {
  TInnerStackList,
  TScheduleNavigationProps,
} from '@/src/screens/ScreenTransition/ScreenTransitionScheduleStack';
import {isIOS} from '@/src/utils/device';
import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';
import FadeInTransition from './FadeInTransition';
import {AnimatedPressable} from '@/src/components/common/AnimatedComponents';

const TABS = [
  {
    label: 'Subjects',
    screen: 'ScreenTransitionSchedule',
  },
  {
    label: 'Homework',
    screen: 'ScreenTransitionHomework',
  },
];

const SubjectsHeader = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation<TScheduleNavigationProps>();
  const insets = useSafeAreaInsets();

  const navState = navigation.getState();
  const state = navState?.routes?.[navState.index].state;
  const stackIndex = state?.index || 0;

  const paddingTop =
    insets.top > 24 ? (isIOS ? insets.top : insets.top + 12) : 32;

  return (
    <View style={styles.whiteBg}>
      <FadeInTransition index={0} direction="left" animate={isFocused}>
        <View style={[styles.container, {paddingTop}]}>
          {TABS.map((tab, index) => (
            <AnimatedPressable
              key={`tab-${index}`}
              style={styles.tabContainer}
              onPress={() =>
                navigation.navigate(tab.screen as keyof TInnerStackList)
              }>
              <Text style={[styles.tab, stackIndex === index && styles.black]}>
                {tab.label}
              </Text>
            </AnimatedPressable>
          ))}
        </View>
      </FadeInTransition>
    </View>
  );
};

export default SubjectsHeader;

const styles = StyleSheet.create({
  whiteBg: {
    backgroundColor: Colors.WHITE,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
  },
  tabContainer: {
    width: '50%',
  },
  tab: {
    paddingVertical: 4,
    textAlign: 'center',
    fontSize: 20,
    color: Colors.QUICK_SILVER,
    fontFamily: typography.semiBold,
  },
  black: {
    color: Colors.BLACK,
  },
});
