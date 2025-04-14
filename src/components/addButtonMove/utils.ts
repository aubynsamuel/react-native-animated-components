import {HEIGHT_SCR} from '@/src/utils/device';

export const calculateSkeletonHeight = (
  insetsTop: number = 0,
  insetsBottom: number = 0,
  totalGap: number = 0,
) => {
  const availableHeight = HEIGHT_SCR - insetsTop - insetsBottom;
  const skeletonHeight = (availableHeight - totalGap) / 5;
  return skeletonHeight;
};
