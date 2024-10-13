'use server';

import getLastSecondToSun from '@/utils/getLastSecondToSun';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export default async function getSurveysId() {
  const date = dayjs().format('YYYY-MM-DD');

  try {
    // TODO: api 경로 수정
    const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER_URL}/surveysId?date=${date}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      // 그 주동안 캐싱 처리
      cache: 'force-cache',
      next: {
        revalidate: getLastSecondToSun(),
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data.surveysId;
    }
  } catch (error) {
    console.error(error);
  }
}
