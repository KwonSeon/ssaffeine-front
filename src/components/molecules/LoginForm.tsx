'use client';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);

  // 비밀번호 보이기/숨기기
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className='flex flex-col justify-around h-full'>
      <div className='flex flex-col'>
        <Input
          isClearable
          label='아이디'
          variant='bordered'
          placeholder='아이디를 입력해주세요'
          isInvalid={true}
          errorMessage='비밀번호를 확인해주세요'
          onClear={() => console.log('input cleared')}
        />
        <Input
          label='비밀번호'
          variant='bordered'
          placeholder='비밀번호를 입력해주세요'
          // isInvalid={true}
          // errorMessage='비밀번호를 확인해주세요'
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
      <Button>로그인</Button>
    </form>
  );
}
