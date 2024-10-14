'use client';

import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className='z-10'>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Close modal
      </button>
      <div>{children}</div>
    </div>
  );
}
