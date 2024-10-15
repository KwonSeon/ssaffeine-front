'use client';

import { XMarkIcon } from '@heroicons/react/16/solid';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Modal({ children, title }: { children: React.ReactNode; title?: string }) {
  const router = useRouter();
  const [isFadingOut, setIsFadingOut] = useState(false);

  const closeModal = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      router.back();
    }, 150);
  };

  return (
    <>
      <div
        className={`${
          isFadingOut ? 'animate-fadeOut' : 'animate-fadeIn'
        } bg-black opacity-50 w-[100vw] h-[100vh] fixed top-0 left-0 z-40`}
        onClick={closeModal}
      />
      <div
        className={`${
          isFadingOut ? 'animate-fadeOut' : 'animate-fadeIn'
        } bg-white z-40 w-[400px] h-fit fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-lg`}
        style={{
          animationDuration: '0.2s',
        }}
      >
        <div className='flex justify-end'>
          <div className='w-full text-center py-2 text-lg font-semibold'>{title}</div>
          <Button
            className='bg-white absolute right-0'
            color='success'
            isIconOnly
            aria-label='Close modal'
            onClick={closeModal}
          >
            <XMarkIcon className='w-8' />
          </Button>
        </div>
        <div className='w-full h-full p-4 flex flex-col'>{children}</div>
      </div>
    </>
  );
}
