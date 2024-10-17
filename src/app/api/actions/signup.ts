'use server';

import { redirect } from 'next/navigation';

export default async function signup(prevState: { message: string | null }, formData: FormData) {
  if (!formData.get('semester') || !(formData.get('semester') as string)?.trim()) {
    return { message: 'no_semester' };
  }
  if (!formData.get('region') || !(formData.get('region') as string)?.trim()) {
    return { message: 'no_region' };
  }
  if (!formData.get('group') || !(formData.get('group') as string)?.trim()) {
    return { message: 'no_group' };
  }

  let shouldRedirect = false;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData,
      cache: 'no-cache',
    });

    console.log('res:', res.json());

    if (!res.ok) return { message: 'fail' };

    shouldRedirect = true;
  } catch (error) {
    console.error('error:', error);
    return { message: null };
  }

  if (shouldRedirect) {
    redirect('/auth/signin');
  }

  return { message: null };
}
