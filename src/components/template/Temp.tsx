'use client';

import { Button, Input } from '@nextui-org/react';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Temp() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    region: '',
    group: '',
    name: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      ...formData,
    });

    console.log(res);

    if (res?.error) {
      // 로그인 실패 처리
      console.error('Sign-in error:', res?.error);
      alert('로그인 실패');
    } else {
      router.push('/'); // 로그인 성공 후 이동할 페이지
    }
  };

  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });

    router.push('/'); // 로그아웃 후 이동할 페이지
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input label='Region' name='region' value={formData.region} onChange={handleChange} />
        <Input label='Group' name='group' value={formData.group} onChange={handleChange} />
        <Input label='Name' name='name' value={formData.name} onChange={handleChange} />
        <Input label='Password' name='password' type='password' value={formData.password} onChange={handleChange} />
        <button type='submit'>Sign in</button>
      </form>
      <Button variant='light' onClick={handleSignOut}>
        signout
      </Button>
    </div>
  );
}
