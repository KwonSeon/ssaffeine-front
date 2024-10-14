'use client';

import updateSurvey from '@/app/api/serveractions/updateSurvey';
import useAdminContext from '@/context/AdminProvider';
import { Button } from '@nextui-org/react';
import { FormEvent } from 'react';
import WeekdayCheckbox from '../molecules/WeekdayCheckbox';
import WeekdayDatePicker from '../molecules/WeekdayDatePicker';

export default function UpdateSurvey() {
  const { nextSurveyState } = useAdminContext();

  const handleUpdateSurvey = async (e: FormEvent) => {
    e.preventDefault();

    const update = await updateSurvey(nextSurveyState);
    // console.log('update', update);
    if (update) {
      alert('주문이 수정되었습니다.');
    }
  };

  return (
    <>
      <p>다음주 주문 수정</p>
      <form>
        <WeekdayCheckbox />
        <WeekdayDatePicker />
        <Button type='submit' onClick={handleUpdateSurvey}>
          수정
        </Button>
      </form>
    </>
  );
}
