import {StyleSheet} from 'react-native';

import {Colors} from '@/src/utils/colors';

export const shadows = StyleSheet.create({
  shadow: {
    shadowColor: Colors.BLACK,
    shadowOpacity: 1,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    elevation: 50,
  },
  lowShadow: {
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    elevation: 12,
  },
  justShadow: {
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10,
  },
  veryJustShadow: {
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
  },
});
