'use server';

export default async function signup(formData: FormData) {
  if (!formData.get('semester') || !(formData.get('semester') as string)?.trim()) {
    return 'no_semester';
  }
  if (!formData.get('region') || !(formData.get('region') as string)?.trim()) {
    return 'no_region';
  }
  if (!formData.get('group') || !(formData.get('group') as string)?.trim()) {
    return 'no_group';
  }

  const semester = formData.get('semester') as string;
  const semesterValue = () => {
    if (semester === '교육프로') return 0;
    return Number(semester.slice(0, semester.length - 1));
  };

  const region = formData.get('region') as string;
  const regionValue = () => {
    if (region === '서울') return 'E001';
    if (region === '대전') return 'E002';
    if (region === '구미') return 'E003';
    if (region === '광주') return 'E004';
    if (region === '부울경') return 'E005';
  };

  const group = formData.get('group') as string;
  const groupValue = () => {
    if (group === '교육프로') return 0;
    return Number(group.slice(0, group.length - 1));
  };

  let shouldRedirect = false;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.get('username'),
        loginId: formData.get('loginId'),
        password: formData.get('password'),
        semester: semesterValue(),
        region: regionValue(),
        group: groupValue(),
      }),
      credentials: 'include',
      cache: 'no-cache',
    });

    if (!res.ok) return 'fail';

    shouldRedirect = true;

    // await signIn('credentials', {
    //   loginId: formData.get('loginId'),
    //   password: formData.get('password'),
    //   redirect: false,
    // });
  } catch (error) {
    console.error('error:', error);
    return 'fail';
  }

  return shouldRedirect ? 'success' : 'fail';
}
