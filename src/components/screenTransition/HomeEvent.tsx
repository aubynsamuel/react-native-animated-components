import {View, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {HomeEventProps} from './types';
import {typography} from '@/src/utils/typography';
import {MED_FONT_UPSCALE_FACTOR} from '@/src/utils/device';

const HomeEvent = ({
  source,
  eventTitle,
  eventDate,
  containerStyle,
}: HomeEventProps) => {
  return (
    <View style={[styles.rowCenter, styles.container, containerStyle]}>
      <View style={[styles.rowCenter, styles.gap16]}>
        <Image source={source} style={styles.eventImg} />
        <View style={styles.gap8}>
          <Text
            style={styles.eventTitle}
            maxFontSizeMultiplier={MED_FONT_UPSCALE_FACTOR}>
            {eventTitle}
          </Text>
          <Text
            style={styles.eventDate}
            maxFontSizeMultiplier={MED_FONT_UPSCALE_FACTOR}>
            {eventDate}
          </Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="cards-heart-outline" size={18} />
      </View>
    </View>
  );
};

export default HomeEvent;

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 5,
    borderRadius: 24,
    justifyContent: 'space-between',
  },
  eventImg: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: typography.bold,
  },
  eventDate: {
    fontSize: 14,
    fontFamily: typography.semiBold,
    color: Colors.QUICK_SILVER,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
    backgroundColor: Colors.WHITE,
  },
  gap16: {
    gap: 16,
  },
  gap8: {
    gap: 8,
  },
});
