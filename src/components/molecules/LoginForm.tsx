'use client';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Button, Input } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

// const initialState = {
//   message: '',
// };

export default function LoginForm() {
  // const { state, formAction } = useFormState(login, initialState);
  const { pending } = useFormStatus();

  const [isVisible, setIsVisible] = useState(false);
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // 비밀번호 보이기/숨기기
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className='flex flex-col justify-around h-full gap-4'>
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
      <Button
        type='submit'
        color='primary'
        disabled={pending}
        onClick={() =>
          signIn('credentials', {
            loginId,
            password,
          })
        }
      >
        로그인
      </Button>
    </form>
  );
}
