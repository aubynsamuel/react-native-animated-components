import {useIsFocused} from '@react-navigation/native';
import {ScrollView, StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Colors} from '@/src/utils/colors';
import {cards} from '@/src/components/bank/constants';
import HomeHeader from '@/src/components/bank/HomeHeader';
import CardDetail from '@/src/components/bank/CardDetail';
import HomeActions from '@/src/components/bank/HomeActions';
import RecentTransactions from '@/src/components/bank/RecentTransactions';

const BankHome = () => {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top > 0 ? insets.top + 4 : 24;

  if (isFocused) {
    StatusBar.setBarStyle('light-content');
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.spaceBottom}>
        <HomeHeader style={{paddingTop}} />
        <HomeActions style={styles.actionsContainer} />
        <RecentTransactions style={styles.transactionsContainer} />
        <CardDetail {...cards?.[0]} style={styles.transactionsContainer} />
      </ScrollView>
    </>
  );
};

export default BankHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CULTURED,
  },
  actionsContainer: {
    marginTop: 90,
    marginHorizontal: 28,
  },
  transactionsContainer: {
    marginTop: 24,
    marginLeft: 28,
  },
  spaceBottom: {
    paddingBottom: 152,
  },
});
