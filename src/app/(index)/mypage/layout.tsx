import UserTabs from '@/components/molecules/UserTab';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex p-4 flex-col lg:flex-row w-full'>
      <UserTabs />
      <div className=' mt-3 lg:mt-0 lg:px-3 w-full'>{children}</div>
    </div>
  );
}
