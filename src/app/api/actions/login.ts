'use server';

import { signIn } from '@/auth';

export default async function login(prevState: any, formData: FormData) {
  const loginId = formData.get('loginId');
  const password = formData.get('password');

  try {
    const res = await signIn('credentials', {
      loginId: loginId,
      password: password,
    });

    console.log('res', res);
  } catch (error) {
    console.error(error);
    return { message: '로그인 실패' };
  }
  return { message: '로그인 성공' };
}
