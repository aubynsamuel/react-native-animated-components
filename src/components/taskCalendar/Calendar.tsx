import mitt from 'mitt';
import {FlatList} from 'react-native';
import React, {memo, useCallback, useRef} from 'react';
import {CalendarDayMetadata} from '@marceloterreiro/flash-calendar';
import {runOnJS, useAnimatedReaction} from 'react-native-reanimated';

import {WIDTH} from '@/src/utils/device';
import WeekDayListItem from './WeekDayListItem';
import {today} from '@/src/screens/TaskCalendarScreen';
import {useCalendarDays} from './hooks/useCalendarDays';
import WeekEmptyDayListItem from './WeekEmptyDayListItem';
import {TCalendar, TEmptyDay, TCalendarListItem} from './types';
import {ANIMATION_DUR, calendarFirstDayOfWeek} from './constants';

export const setDayEmitter = mitt<{
  daySelected: CalendarDayMetadata;
}>();

const Calendar = memo(
  ({month, fadeFinished, executeChild, selectedDate}: TCalendar) => {
    const listRef =
      React.useRef<FlatList<TEmptyDay | CalendarDayMetadata>>(null);
    const globalSelectedDate = useRef(new Date());

    const days = useCalendarDays(month, calendarFirstDayOfWeek);

    const renderItem = useCallback(({item: day, index}: TCalendarListItem) => {
      if ('isEmpty' in day) {
        return <WeekEmptyDayListItem key={index} />;
      } else {
        return (
          <WeekDayListItem
            day={day}
            key={index}
            selectedDate={selectedDate}
            globalSelectedDate={globalSelectedDate}
          />
        );
      }
    }, []);

    const scrollToDay = () => {
      setTimeout(() => {
        const index = Math.floor(today.getDate() / 7);
        listRef.current?.scrollToOffset({
          offset: index * WIDTH,
          animated: true,
        });
      }, ANIMATION_DUR);
    };

    useAnimatedReaction(
      () => {
        return fadeFinished.value;
      },
      (cur, prev) => {
        if (!prev && cur) {
          runOnJS(executeChild)(scrollToDay);
        }
      },
    );

    return (
      <FlatList
        data={days}
        ref={listRef}
        horizontal
        pagingEnabled
        initialNumToRender={7}
        maxToRenderPerBatch={7}
        renderItem={renderItem}
        removeClippedSubviews
        showsHorizontalScrollIndicator={false}
        updateCellsBatchingPeriod={ANIMATION_DUR / 3}
      />
    );
  },
);

Calendar.displayName = 'Calendar';

export default Calendar;
