'use client';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Button, Input } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SigninForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  // 비밀번호 보이기/숨기기
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        loginId: loginId,
        password: password,
        redirect: false,
      });

      if (!res?.ok) {
        console.log('로그인 실패:', res?.error);
      }

      router.back(); // 로그인 성공 후 이동할 페이지
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  return (
    <form onSubmit={handleSignIn} className='flex flex-col justify-around h-full gap-4'>
      <div className='flex flex-col gap-2'>
        <Input
          isClearable
          label='아이디'
          name='loginId'
          variant='bordered'
          placeholder='아이디를 입력해주세요'
          // isInvalid={true}
          // errorMessage='{state.message}'
          value={loginId}
          onValueChange={setLoginId}
          onClear={() => console.log('input cleared')}
        />
        <Input
          label='비밀번호'
          variant='bordered'
          name='password'
          placeholder='비밀번호를 입력해주세요'
          // isInvalid={true}
          // errorMessage='비밀번호를 확인해주세요'
          value={password}
          onValueChange={setPassword}
          endContent={
            <button
              className='focus:outline-none w-6 h-6'
              type='button'
              onClick={toggleVisibility}
              aria-label='toggle password visibility'
            >
              {isVisible ? (
                <EyeIcon className='text-2xl text-default-400 pointer-events-none' />
              ) : (
                <EyeSlashIcon className='text-2xl text-default-400 pointer-events-none' />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
        />
      </div>
      <Button color='primary' type='submit'>
        로그인
      </Button>
    </form>
  );
}
