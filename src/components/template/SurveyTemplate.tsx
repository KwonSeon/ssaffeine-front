'use client';

import { ZonedDateTime, getLocalTimeZone } from '@internationalized/date';
import { Button, Checkbox, CheckboxGroup, DatePicker } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

export default function SurveyTemplate() {
  // TODO: 다음주 주문 가능한 요일 = 저장된 요일을 불러오고, 저장된 요일이 없으면 기본값으로 월화수목금을 불러온다.
  const [nextMonday, setNextMonday] = useState<ZonedDateTime | null>(null);
  const [nextFriday, setNextFriday] = useState<ZonedDateTime | null>(null);

  // 클라이언트에서만 다음 주 월요일과 금요일을 계산하도록 useEffect 사용
  useEffect(() => {
    const getNextMonday = () => {
      const now = new Date(); // 현재 날짜와 시간 가져오기
      const dayOfWeek = now.getDay(); // 현재 요일 가져오기 (0: 일요일 ~ 6: 토요일)

      // 다음 주 월요일까지 남은 일수 계산 (1: 월요일)
      const daysUntilNextMonday = (1 - dayOfWeek + 7) % 7 || 7;

      // 다음 주 월요일 날짜로 설정
      const nextMondayDate = new Date(now);
      nextMondayDate.setDate(now.getDate() + daysUntilNextMonday);

      // ZonedDateTime으로 변환
      const dateTime = new ZonedDateTime(
        nextMondayDate.getFullYear(), // 연도
        nextMondayDate.getMonth() + 1, // 월 (0부터 시작하므로 +1)
        nextMondayDate.getDate(), // 일
        getLocalTimeZone(), // 로컬 시간대
        32400000, // UTC +9 시간대 오프셋 (밀리초 단위)
        9, // 시간 (9시)
        0 // 분 (0분)
      );

      return dateTime;
    };

    const getNextFriday = () => {
      const now = new Date(); // 현재 날짜와 시간 가져오기
      const dayOfWeek = now.getDay(); // 현재 요일 가져오기 (0: 일요일 ~ 6: 토요일)

      // 다음 주 금요일까지 남은 일수 계산 (5: 금요일)
      const daysUntilNextFriday = (5 - dayOfWeek + 7) % 7 || 7;

      // 다음 주 금요일 날짜로 설정
      const nextFridayDate = new Date(now);
      nextFridayDate.setDate(now.getDate() + daysUntilNextFriday);

      // ZonedDateTime으로 변환
      const dateTime = new ZonedDateTime(
        nextFridayDate.getFullYear(), // 연도
        nextFridayDate.getMonth() + 1, // 월 (0부터 시작하므로 +1)
        nextFridayDate.getDate(), // 일
        getLocalTimeZone(), // 로컬 시간대
        32400000, // UTC +9 시간대 오프셋 (밀리초 단위)
        23, // 시간 (23시)
        59 // 분 (59분)
      );

      return dateTime;
    };

    // 클라이언트에서만 다음 주 월요일과 금요일을 계산하여 상태에 저장
    setNextMonday(getNextMonday());
    setNextFriday(getNextFriday());
  }, []);

  return (
    <>
      <p>언제부터 언제까지 주문 보통 다음주 주문일듯</p>
      <CheckboxGroup
        label='요일 선택'
        orientation='horizontal'
        color='primary'
        defaultValue={['1', '2', '3', '4', '5']}
        className='w-full flex'
      >
        <Checkbox value='1'>월</Checkbox>
        <Checkbox value='2'>화</Checkbox>
        <Checkbox value='3'>수</Checkbox>
        <Checkbox value='4'>목</Checkbox>
        <Checkbox value='5'>금</Checkbox>
      </CheckboxGroup>
      <div className='w-full max-w-xl flex flex-row gap-4'>
        {nextMonday && (
          <DatePicker
            label='시작일'
            variant='bordered'
            hideTimeZone
            showMonthAndYearPickers
            defaultValue={nextMonday}
          />
        )}
      </div>
      <div className='w-full max-w-xl flex flex-row gap-4'>
        {nextFriday && (
          <DatePicker
            label='마감일'
            variant='bordered'
            hideTimeZone
            showMonthAndYearPickers
            defaultValue={nextFriday}
          />
        )}
      </div>
      <Button>저장</Button>
    </>
  );
}
