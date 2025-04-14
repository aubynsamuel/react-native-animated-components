import {useIsFocused} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  NOTIFICATION_EVENTS_TODAY,
  NOTIFICATION_EVENTS_YESTERDAY,
} from '@/src/components/screenTransition/data';
import {isIOS} from '@/src/utils/device';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';
import TextBetween from '@/src/components/screenTransition/TextBetween';
import FadeInTransition from '@/src/components/screenTransition/FadeInTransition';
import NotificationEvent from '@/src/components/screenTransition/NotificationEvent';
import NotificationsHeader from '@/src/components/screenTransition/NotificationsHeader';

const ScreenTransitionNotifications = () => {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  const paddingTop =
    insets.top > 24 ? (isIOS ? insets.top : insets.top + 12) : 32;
  const paddingBottom = insets.top <= 52 ? 30 : insets.bottom + 8;

  return (
    <View style={[styles.container, {paddingTop}]}>
      <FadeInTransition
        index={0}
        direction="left"
        animate={isFocused}
        containerStyle={styles.spaceHor}>
        <NotificationsHeader />
      </FadeInTransition>
      <ScrollView contentContainerStyle={{paddingBottom}}>
        <TextBetween
          index={1}
          title="Today"
          animate={isFocused}
          titleStyle={styles.periodStyle}
          containerStyle={[styles.spaceTop, styles.spaceHor]}
        />
        {NOTIFICATION_EVENTS_TODAY.map((event, index) => (
          <FadeInTransition
            direction="top"
            animate={isFocused}
            key={`notification-event-${index}`}
            index={2 + (index + 0.25)}
            containerStyle={styles.smSpaceHor}>
            <NotificationEvent
              event={event}
              containerStyle={
                index === 0 ? styles.spaceTop : styles.xxsmSpaceTop
              }
            />
          </FadeInTransition>
        ))}
        <TextBetween
          index={3 + NOTIFICATION_EVENTS_TODAY.length * 0.25}
          title="Yesterday"
          animate={isFocused}
          titleStyle={styles.periodStyle}
          containerStyle={[styles.spaceTop, styles.spaceHor]}
        />
        {NOTIFICATION_EVENTS_YESTERDAY.map((event, index) => (
          <FadeInTransition
            direction="top"
            animate={isFocused}
            key={`notification-event-${index}`}
            index={4 + NOTIFICATION_EVENTS_TODAY.length * 0.25 + (index + 0.25)}
            containerStyle={styles.smSpaceHor}>
            <NotificationEvent
              event={event}
              containerStyle={
                index === 0 ? styles.spaceTop : styles.xxsmSpaceTop
              }
            />
          </FadeInTransition>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScreenTransitionNotifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  periodStyle: {
    color: Colors.QUICK_SILVER,
    fontFamily: typography.semiBold,
  },
  spaceHor: {
    paddingHorizontal: 24,
  },
  smSpaceHor: {
    paddingHorizontal: 8,
  },
  spaceTop: {
    marginTop: 12,
  },
  xxsmSpaceTop: {
    marginTop: 4,
  },
});
