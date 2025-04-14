import Animated, {
  withTiming,
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedReaction,
} from 'react-native-reanimated';
import React, {useCallback} from 'react';
import Haptic from 'react-native-haptic-feedback';
import {View, Image, StyleSheet, GestureResponderEvent} from 'react-native';

import Text from '@/src/components/common/Text';
import {TMessageItem} from './types';
import {Colors} from '@/src/utils/colors';
import {DELAY_LONG_PRESS} from './data';
import {typography} from '@/src/utils/typography';
import {HAPTIC_CONFIG} from '@/src/utils/haptics';
import {isAndroid, isIOS, WIDTH} from '@/src/utils/device';
import {AnimatedPressable} from '@/src/components/common/AnimatedComponents';

const triggerLongPressHaptik = () => {
  if (isAndroid) {
    Haptic.trigger('longPress', HAPTIC_CONFIG);
  } else {
    Haptic.trigger('impactMedium', HAPTIC_CONFIG);
  }
};

const MessageItem = React.memo(
  ({
    item,
    scrollY,
    capture,
    handleKeyboard,
    scrollToFirstItem,
  }: TMessageItem) => {
    const scale = useSharedValue(item?.animate ? 0 : 1);

    //Handle animation finish when scrolling to top
    useAnimatedReaction(
      () => {
        return scrollY?.value ?? 0;
      },
      (newScroll, oldScroll) => {
        if (newScroll === 0 && oldScroll === 0) {
          return null;
        } else if (newScroll === 0 && oldScroll !== 0) {
          scale.value = withTiming(1);
        }
      },
    );

    const animStyle = useAnimatedStyle(() => {
      if (!item?.animate) {
        return {};
      }

      return {
        transform: [
          {
            scale: interpolate(
              scale.value,
              [0.15, 1],
              [0, 1],
              Extrapolation.CLAMP,
            ),
          },
        ],
        left: interpolate(scale.value, [0.15, 1], [-(WIDTH - 48) / 2, 0]),
        top: interpolate(scale.value, [0.15, 1], [-40, 0]),
      };
    }, []);

    const animImgStyle = useAnimatedStyle(() => ({
      transform: [{scale: !item?.animate ? 1 : scale.value}],
    }));

    const customEntering = useCallback(() => {
      'worklet';
      let animations = {
        opacity: withTiming(1),
        transform: [{scale: withTiming(1)}],
      };
      let initialValues = {
        opacity: 0,
        transform: [{scale: 0}],
      };

      return {
        initialValues,
        animations,
      };
    }, []);

    const customExiting = useCallback(() => {
      'worklet';
      const animations = {
        opacity: withTiming(0),
        transform: [{scale: withTiming(0)}],
      };
      const initialValues = {
        opacity: 1,
        transform: [{scale: 1}],
      };
      return {
        initialValues,
        animations,
      };
    }, []);

    const onLongPress = React.useCallback(
      (e: GestureResponderEvent) => {
        isIOS && triggerLongPressHaptik();

        !!handleKeyboard && handleKeyboard();

        !!capture &&
          capture(item.id, e.nativeEvent.pageY - e.nativeEvent.locationY);
      },
      [handleKeyboard, triggerLongPressHaptik],
    );

    React.useEffect(() => {
      if (item?.animate) {
        !!scrollToFirstItem && scrollToFirstItem();

        //Trigger animation if scroll position is at top
        if (scrollY?.value === 0) {
          scale.value = withTiming(1);
        }
      }
    }, []);

    return (
      <>
        <View style={styles.messageContainer}>
          {!item?.isOwnerOfChat && (
            <Animated.Image
              source={item?.image}
              style={[
                animImgStyle,
                styles.avatar,
                styles.messageRecipient,
                styles.messageSenderBorder,
              ]}
            />
          )}
          <AnimatedPressable
            pointerEvents={'box-only'}
            onLongPress={onLongPress}
            delayLongPress={DELAY_LONG_PRESS}
            style={[
              animStyle,
              styles.messageInnerContainer,
              item?.isOwnerOfChat
                ? styles.messageSenderBorder
                : styles.messageRecipientBorder,
            ]}>
            <View style={styles.messageHeader}>
              <Text style={styles.messageName}>{item?.name}</Text>
              <Text style={styles.messageTime}>{item?.time}</Text>
            </View>
            <Text style={styles.message}>{item?.message}</Text>
            {item.emoji && (
              <Animated.View
                exiting={customExiting}
                entering={customEntering}
                style={styles.smallEmojiContainer}>
                <Image source={item.emoji} style={styles.smallEmoji} />
              </Animated.View>
            )}
          </AnimatedPressable>
          {item?.isOwnerOfChat && (
            <Animated.Image
              source={item.image}
              style={[
                animImgStyle,
                styles.avatar,
                styles.messageSender,
                styles.messageRecipientBorder,
              ]}
            />
          )}
        </View>
      </>
    );
  },
);

MessageItem.displayName = 'MessageItem';

export default MessageItem;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 16,
  },
  messageInnerContainer: {
    flex: 1,
    borderColor: Colors.PLATINUM,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    backgroundColor: Colors.WHITE,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  messageName: {
    fontFamily: typography.semiBold,
  },
  messageTime: {
    fontFamily: typography.regular,
    color: Colors.QUICK_SILVER,
  },
  messageRecipient: {
    marginRight: 12,
  },
  messageSender: {
    marginLeft: 12,
    marginRight: 8,
  },
  messageSenderBorder: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  messageRecipientBorder: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  message: {
    fontFamily: typography.regular,
    fontSize: 16,
    lineHeight: 20,
  },
  smallEmojiContainer: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PLATINUM,
    borderWidth: 1,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    right: 12,
    bottom: -14,
    position: 'absolute',
  },
  smallEmoji: {
    width: 16,
    height: 16,
  },
  avatar: {
    width: 36,
    height: 36,
  },
});
