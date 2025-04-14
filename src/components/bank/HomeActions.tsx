import {Rect, Svg} from 'react-native-svg';
import {View, ViewStyle, Pressable, StyleProp, StyleSheet} from 'react-native';

import {ACTIONS} from './data';
import {shadows} from './styles';
import {Colors} from '@/src/utils/colors';
import {isAndroid} from '@/src/utils/device';
import Text from '@/src/components/common/Text';
import {typography} from '@/src/utils/typography';
import CommonGradient from './CommonGradient';

const HomeActions = ({style}: {style?: StyleProp<ViewStyle>}) => {
  return (
    <View style={[styles.container, style]}>
      {ACTIONS.map(({label, size, Component, iconName}, index) => (
        <Pressable
          key={index}
          style={({pressed}) => [
            isAndroid ? styles.border : shadows.justShadow,
            styles.itemContainer,
            pressed && styles.halfOpacity,
          ]}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.iconContainer}>
            <Svg width={32} height={32} style={styles.absolute}>
              <CommonGradient id={'tabbarBtn'} />
              <Rect
                width={32}
                height={32}
                rx={32 / 2}
                fill={'url(#tabbarBtn)'}
              />
            </Svg>
            <Component name={iconName} size={size} color={'white'} />
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default HomeActions;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  container: {
    gap: 6,
    padding: 6,
    borderRadius: 100,
    backgroundColor: Colors.BRIGHT_GRAY,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    padding: 4,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
  },
  label: {
    flex: 1,
    textAlign: 'center',
    fontFamily: typography.semiBold,
    fontSize: 14,
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfOpacity: {
    opacity: 0.5,
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.PLATINUM,
  },
});
