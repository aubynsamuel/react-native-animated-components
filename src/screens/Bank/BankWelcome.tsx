import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {isIOS} from '@/src/utils/device';
import {Colors} from '@/src/utils/colors';
import Cards from '@/src/components/bank/Cards';
import Button from '@/src/components/bank/Button';
import {shadows} from '@/src/components/bank/styles';
import {TBankNavigationProps} from './BankStack';
import {CARD_HEIGHT} from '@/src/components/bank/constants';
import BankWelcomeText from '@/src/components/bank/BankWelcomeText';

const BankWelcome = () => {
  const navigation = useNavigation<TBankNavigationProps>();
  const insets = useSafeAreaInsets();

  const [changeShadow, setChangeShadow] = useState(false);

  const top = insets.top + 210 + CARD_HEIGHT - 20;
  const bottom = insets.bottom > 0 ? insets.bottom + 8 : 24;

  const onPress = () => {
    if (isIOS) {
      setChangeShadow(true);

      requestAnimationFrame(() => {
        navigation.replace('BankBottomStack');
      });
    } else {
      navigation.replace('BankBottomStack');
    }
  };

  return (
    <View style={styles.container}>
      <BankWelcomeText style={{top}} />
      <Cards
        sharedElementTag={isIOS ? 'cards' : 'cardAndroid'}
        style={_ => [
          {top: insets.top + 210},
          changeShadow && shadows.lowShadow,
        ]}
      />
      <Button label="Join Bankify now" style={{bottom}} onPress={onPress} />
    </View>
  );
};

export default BankWelcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.CHINESE_BLACK,
  },
});
