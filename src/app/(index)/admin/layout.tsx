import AdminTabs from '@/components/molecules/AdminTabs';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col px-4'>
      <AdminTabs />
      {children}
    </div>
  );
}
