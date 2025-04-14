import {Image, StyleSheet, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Text from '@/src/components/common/Text';
import {Colors} from '@/src/utils/colors';
import {typography} from '@/src/utils/typography';

const HomeClass = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeworkContainer}>
        <Text style={styles.homeworkLabel}>Homework</Text>
        <Ionicons name="checkmark-circle-sharp" size={24} />
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="calculator" size={20} />
      </View>
      <View style={styles.gap6}>
        <Text style={styles.classTitle}>{'Basic mathemactics'}</Text>
        <Text style={styles.classDate}>{'Today, 08:15 am'}</Text>
      </View>

      <View style={styles.professorContainer}>
        <Image
          style={styles.professorImg}
          source={{uri: 'https://randomuser.me/api/portraits/women/60.jpg'}}
        />
        <Text style={styles.professorName}>Jane Cooper</Text>
      </View>
    </View>
  );
};

export default HomeClass;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 24,
    gap: 24,
    backgroundColor: Colors.LAVENDER,
  },
  homeworkContainer: {
    top: 12,
    right: 12,
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: Colors.ALICE_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeworkLabel: {
    fontSize: 12,
    fontFamily: typography.medium,
  },
  iconContainer: {
    alignSelf: 'flex-start',
    padding: 14,
    borderRadius: 12,
    backgroundColor: Colors.ALICE_BLUE,
  },
  classTitle: {
    fontSize: 20,
    fontFamily: typography.bold,
  },
  classDate: {
    fontSize: 16,
    color: Colors.QUICK_SILVER,
    fontFamily: typography.semiBold,
  },
  professorContainer: {
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  professorImg: {
    height: 36,
    width: 36,
    borderRadius: 12,
  },
  professorName: {
    fontSize: 16,
    fontFamily: typography.semiBold,
  },
  gap6: {
    gap: 6,
  },
});
