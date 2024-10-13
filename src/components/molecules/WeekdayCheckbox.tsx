'use client';

import useAdminContext from '@/context/AdminProvider';
import { Checkbox, CheckboxGroup } from '@nextui-org/react';

export default function WeekdayCheckbox() {
  // TODO: label 등 수정 필요

  const { nextSurveyState, nextSurveyDispatch } = useAdminContext();

  const handleChange = (value: string[]) => {
    nextSurveyDispatch({ type: 'SET_WEEKDAYS', payload: value });
  };

  return (
    <>
      <CheckboxGroup
        label='주문 가능한 요일'
        name='weekdays'
        orientation='horizontal'
        color='primary'
        className='w-full flex'
        value={nextSurveyState.weekdays}
        onChange={handleChange}
      >
        <Checkbox value='1'>월</Checkbox>
        <Checkbox value='2'>화</Checkbox>
        <Checkbox value='3'>수</Checkbox>
        <Checkbox value='4'>목</Checkbox>
        <Checkbox value='5'>금</Checkbox>
      </CheckboxGroup>
    </>
  );
}
