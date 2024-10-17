'use server';

export default async function getSurvey(surveysId: number) {
  try {
    // TODO: url 변경 필요
    const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER_URL}/survey/${surveysId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });

    if (res.ok) {
      const data = res.json();
      return data;
    }
  } catch (error) {
    console.error('error', error);
  }
}
