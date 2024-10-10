'use client';

import { Tab, Tabs } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { Key } from 'react';

export default function AdminTabs() {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabChange = (key: Key) => {
    const path = String(key); // Key를 string으로 변환
    router.push(path); // 경로 변경
  };
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options' isVertical selectedKey={pathname} onSelectionChange={handleTabChange}>
        <Tab key='/admin' title='admin'>
          <Link href='/admin'></Link>
        </Tab>
        <Tab key='/admin/order' title='order'>
          <Link href='/admin/order'></Link>
        </Tab>
        <Tab key='/admin/print' title='print'>
          <Link href='/admin/print'></Link>
        </Tab>
        <Tab key='/admin/write' title='write'>
          <Link href='/admin/write'></Link>
        </Tab>
      </Tabs>
    </div>
  );
}
