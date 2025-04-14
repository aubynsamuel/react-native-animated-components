import AntDesign from '@expo/vector-icons/AntDesign';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {TDrawerContentItem} from './types';
import {typography} from '@/src/utils/typography';

const DrawerContentItem = ({label, icon}: TDrawerContentItem) => {
  return (
    <TouchableOpacity style={styles.drawerItemContainer}>
      <AntDesign name={icon} color={'white'} size={22} />
      <Text style={styles.drawerItemLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DrawerContentItem;

const styles = StyleSheet.create({
  drawerItemContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 16,
  },
  drawerItemLabel: {
    color: Colors.WHITE,
    marginLeft: 15,
    fontSize: 16,
    fontFamily: typography.regular,
  },
});
