import {
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export type TextBetweenProps = {
  index?: number;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  label?: string;
  animate: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export type SearchBarProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

export type NotificationEventProps =
  | {
      eventTitle: string;
      description: string;
      backgroundColor: string;
      iconName: string;
      component: typeof FontAwesome5;
    }
  | {
      eventTitle: string;
      description: string;
      backgroundColor: string;
      iconName: string;
      component: typeof Ionicons;
    };

export type TNotificationEventProps = {
  event: NotificationEventProps;
  containerStyle?: StyleProp<ViewStyle>;
};

export type ButtonProps = {
  style?: ViewStyle;
  label: string;
  onPress: () => void;
};

export type FadeInTransitionProps = {
  index?: number;
  children: React.ReactNode;
  animate: boolean;
  direction?: 'left' | 'top' | 'top-right' | 'top-left' | 'top-scale';
  containerStyle?: StyleProp<ViewStyle>;
};

export type HomeEventProps = {
  source: ImageSourcePropType;
  eventTitle: string;
  eventDate: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export type ScheduleCalendarProps = {
  index: number;
};

export type ScheduleTimeEventsProps = {
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export type LessonAdditionalProps = {
  index: number;
  containerStyle: StyleProp<ViewStyle>;
};
