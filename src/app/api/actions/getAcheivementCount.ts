'use server';

export default async function getAcheivementCount(surveysId: number) {
  try {
    // TODO: api 경로 수정
    const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER_URL}/acheivement?surveysId=${surveysId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-cache',
      next: {
        tags: ['acheivement'],
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data.count;
    }
  } catch (error) {
    console.error(error);
  }
}
