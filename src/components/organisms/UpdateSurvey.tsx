'use client';

import { Button } from '@nextui-org/react';
import { FormEvent } from 'react';
import WeekdayCheckbox from '../molecules/WeekdayCheckbox';
import WeekdayDatePicker from '../molecules/WeekdayDatePicker';

export default function UpdateSurvey() {
  const handleUpdateSurvey = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <p>다음주 주문 생성</p>
      <form>
        <WeekdayCheckbox />
        <WeekdayDatePicker />
        <Button type='submit' onClick={handleUpdateSurvey}>
          생성
        </Button>
      </form>
    </>
  );
}
