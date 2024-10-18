'use server';

export default async function login(loginId: string, password: string) {
  const body = `loginId=${encodeURIComponent(loginId)}&password=${encodeURIComponent(password)}`;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      // 'Content-Type': 'text/plain',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body,
    cache: 'no-cache',
  });

  // console.log('token: ', res.headers.get('Authorization')?.split('Bearer ')[1]);

  return res;
}
