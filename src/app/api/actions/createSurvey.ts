'use server';

import { auth } from '@/auth';
import { NextSurveyState } from '@/context/nextSurveyReducer';
import formatDayArrayToNum from '@/utils/formatDayArrayToNum';

export default async function createSurvey(nextSurveysData: NextSurveyState) {
  const session = await auth();
  const token = session?.accessToken;

  if (!token) {
    throw new Error('Unauthorized');
  }

  const weekdays = formatDayArrayToNum(nextSurveysData.weekdays);
  const formData = {
    weekdays: weekdays,
    startDate: nextSurveysData.startDate,
    deadline: nextSurveysData.deadline,
  };

  try {
    // TODO: url 수정 필요
    const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER_URL}/survey`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const data = res.json();
      return data;
    }
  } catch (error) {
    console.error('error', error);
  }
}
