import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';
import Button from '@/src/components/screenTransition/Button';
import {WIDTH, XSM_FONT_UPSCALE_FACTOR} from '@/src/utils/device';
import {TWelcomeNavigationProps} from './ScreenTransitionStack';
import StatusBarManager from '@/src/components/common/StatusBarManager';

const title = "The only study app you'll ever need";
const description =
  'Upload class study materials, create electronic flashcards to study.';

const ScreenTransitionWelcome = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<TWelcomeNavigationProps>();

  const marginTop = insets.top > 0 ? insets.top + 48 : 86;
  const marginBottom = insets.bottom > 0 ? insets.bottom + 12 : 32;

  const onPress = () => {
    navigation.navigate('BottomStack');
  };

  return (
    <>
      <StatusBarManager />
      <View style={styles.container}>
        <View style={styles.center}>
          <Image
            style={[styles.img, {marginTop}]}
            source={require('@/src/assets/img/screenTransition/welcome.png')}
          />
          <Text
            style={styles.title}
            maxFontSizeMultiplier={XSM_FONT_UPSCALE_FACTOR}>
            {title}
          </Text>
          <Text
            style={styles.description}
            maxFontSizeMultiplier={XSM_FONT_UPSCALE_FACTOR}>
            {description}
          </Text>
        </View>
        <Button label="Let's start" style={{marginBottom}} onPress={onPress} />
      </View>
    </>
  );
};

export default ScreenTransitionWelcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
  },
  img: {
    width: WIDTH - 48,
    height: WIDTH - 16,
  },
  title: {
    marginTop: 48,
    width: WIDTH - 48,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: typography.bold,
  },
  description: {
    fontSize: 16,
    color: Colors.PHILIPPINE_SILVER,
    textAlign: 'center',
    width: WIDTH - 48,
    marginTop: 24,
    fontFamily: typography.semiBold,
  },
});
