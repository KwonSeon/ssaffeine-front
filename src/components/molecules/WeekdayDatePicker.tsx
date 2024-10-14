'use client';

import useAdminContext from '@/context/AdminProvider';
import formatDayjsToZoned from '@/utils/formatDayjsToZoned';
import formatZonedToDate from '@/utils/formatZonedToDate';
import getNextFriday from '@/utils/getNextFriday';
import getNextMonday from '@/utils/getNextMonday';
import { ZonedDateTime } from '@internationalized/date';
import { DatePicker } from '@nextui-org/react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function WeekdayDatePicker() {
  const { nextSurveyState, nextSurveyDispatch } = useAdminContext();

  const [nextMonday, setNextMonday] = useState<ZonedDateTime | null>(null);
  const [nextFriday, setNextFriday] = useState<ZonedDateTime | null>(null);

  // 시작일 변경
  const handleStartDateChange = (date: ZonedDateTime) => {
    setNextMonday(date);
    nextSurveyDispatch({ type: 'SET_START_DATE', payload: formatZonedToDate(date) });
  };

  // 마감일 변경
  const handleDeadlineChange = (date: ZonedDateTime) => {
    setNextFriday(date);
    nextSurveyDispatch({ type: 'SET_DEADLINE', payload: formatZonedToDate(date) });
  };

  // surveyId가 있을 때만 시작일과 마감일을 불러온다
  // 없는 경우 다음주 월요일과 금요일을 불러온다
  useEffect(() => {
    if (nextSurveyState.surveysId) {
      const startDate = nextSurveyState.startDate;
      const deadline = nextSurveyState.deadline;
      setNextMonday(formatDayjsToZoned(dayjs(startDate)));
      setNextFriday(formatDayjsToZoned(dayjs(deadline)));
    } else {
      handleStartDateChange(getNextMonday());
      handleDeadlineChange(getNextFriday());
    }
  }, []);

  return (
    <>
      <div className='w-full max-w-xl flex flex-row gap-4'>
        <DatePicker
          label='시작일'
          variant='bordered'
          hideTimeZone
          showMonthAndYearPickers
          value={nextMonday}
          onChange={handleStartDateChange}
        />
      </div>
      <div className='w-full max-w-xl flex flex-row gap-4'>
        <DatePicker
          label='마감일'
          variant='bordered'
          hideTimeZone
          showMonthAndYearPickers
          value={nextFriday}
          onChange={handleDeadlineChange}
        />
      </div>
    </>
  );
}
