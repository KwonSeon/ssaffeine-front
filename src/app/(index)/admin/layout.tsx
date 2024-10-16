import { auth } from '@/auth';
import AdminTabs from '@/components/molecules/AdminTabs';
import { AdminContextProvider } from '@/context/AdminProvider';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const role = session?.user?.role;

  if (!session || (role !== 'ROLE_ADMIN_ADMIN' && role !== 'ROLE_ADMIN')) {
    redirect('/');
  }

  return (
    <div className='flex p-4 flex-col lg:flex-row w-full'>
      <AdminTabs />
      <div className=' mt-3 lg:mt-0 lg:px-3 w-full'>
        <AdminContextProvider>{children}</AdminContextProvider>
      </div>
    </div>
  );
}
