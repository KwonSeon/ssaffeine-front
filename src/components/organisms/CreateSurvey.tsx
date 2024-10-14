'use client';

import createSurvey from '@/app/api/serveractions/createSurvey';
import useAdminContext from '@/context/AdminProvider';
import formatNumToDayArray from '@/utils/formatNumToDayArray';
import { Button } from '@nextui-org/react';
import { FormEvent } from 'react';
import WeekdayCheckbox from '../molecules/WeekdayCheckbox';
import WeekdayDatePicker from '../molecules/WeekdayDatePicker';

export default function CreateSurvey() {
  const { nextSurveyState, nextSurveyDispatch } = useAdminContext();

  const handleCreateSurvey = async (e: FormEvent) => {
    e.preventDefault();
    // 주문 생성
    const create = await createSurvey(nextSurveyState);
    console.log('create', create);
    // 주문 생성 후 초기화
    // TODO: 변수명 수정 필요
    nextSurveyDispatch({ type: 'SET_SURVEYS_ID', payload: create.id });
    nextSurveyDispatch({ type: 'SET_WEEKDAYS', payload: formatNumToDayArray(create.weekdays) });
    nextSurveyDispatch({ type: 'SET_START_DATE', payload: create.startDate });
    nextSurveyDispatch({ type: 'SET_DEADLINE', payload: create.deadline });

    // TOFO: alert design 수정 필요
    alert('주문이 생성되었습니다.');
  };

  return (
    <>
      <p>다음주 주문 생성</p>
      <form>
        <WeekdayCheckbox />
        <WeekdayDatePicker />
        <Button type='submit' onClick={handleCreateSurvey}>
          생성
        </Button>
      </form>
    </>
  );
}
