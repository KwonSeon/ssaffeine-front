import React from 'react';
import Headers from '../../components/organisms/Headers';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Headers />
      <div className='max-w-[1024px] m-auto w-full'>{children}</div>
    </>
  );
}
