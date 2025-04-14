import {useIsFocused} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {isIOS} from '@/src/utils/device';
import {Colors} from '@/src/utils/colors';
import LessonHeader from '@/src/components/screenTransition/LessonHeader';
import LessonStudents from '@/src/components/screenTransition/LessonStudents';
import FadeInTransition from '@/src/components/screenTransition/FadeInTransition';
import LessonAdditional from '@/src/components/screenTransition/LessonAdditional';

const ScreenTransitionLesson = () => {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  const paddingTop =
    insets.top > 24 ? (isIOS ? insets.top : insets.top + 12) : 32;

  return (
    <View style={[styles.container, {paddingTop}]}>
      <FadeInTransition
        index={0}
        animate={isFocused}
        direction="left"
        containerStyle={styles.spaceHor}>
        <LessonHeader />
      </FadeInTransition>
      <ScrollView contentContainerStyle={styles.spaceBottom}>
        <FadeInTransition
          index={1}
          animate={isFocused}
          direction="top"
          containerStyle={[styles.spaceTop, styles.spaceHor]}>
          <LessonStudents />
        </FadeInTransition>
        <LessonAdditional
          index={2}
          containerStyle={[styles.spaceTop, styles.spaceHor]}
        />
      </ScrollView>
    </View>
  );
};

export default ScreenTransitionLesson;

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
  spaceBottom: {
    paddingBottom: 64,
  },
});
