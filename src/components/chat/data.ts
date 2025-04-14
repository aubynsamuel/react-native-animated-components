import {CaptureOptions} from 'react-native-view-shot';

import {isIOS} from '@/src/utils/device';

export const EMOJI = [
  require('@/src/assets/img/emoji/happy.png'),
  require('@/src/assets/img/emoji/crying.png'),
  require('@/src/assets/img/emoji/in-love.png'),
  require('@/src/assets/img/emoji/laughing.png'),
  require('@/src/assets/img/emoji/anguish.png'),
  require('@/src/assets/img/emoji/angry.png'),
];

export const captureOptions: CaptureOptions = {
  format: 'jpg',
  quality: 0.25,
  result: 'tmpfile', //File get deleted when app is opened again
};

export const BACKGROUND_BLUR_RADIUS = isIOS ? 50 : 15;
export const DELAY_LONG_PRESS = isIOS ? 250 : 150; //Default is 500ms
