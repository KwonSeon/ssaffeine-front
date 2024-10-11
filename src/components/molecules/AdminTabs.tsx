'use client';

import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { Key, useEffect, useState } from 'react';

export default function AdminTabs() {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabChange = (key: Key) => {
    const path = String(key); // Key를 string으로 변환
    router.push(path); // 경로 변경
  };

  // 화면 크기에 따라 isVertical을 동적으로 설정
  const [isVertical, setIsVertical] = useState(false);

  // 화면 크기 감지 및 설정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg 이상
        setIsVertical(true);
      } else {
        // sm 이하
        setIsVertical(false);
      }
    };

    // 초기 화면 크기 설정
    handleResize();

    // 창 크기가 변경될 때마다 호출
    window.addEventListener('resize', handleResize);

    // 클린업 함수
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Card isBlurred shadow='md' className='w-full lg:w-fit h-fit min-w-[112px]'>
      <CardBody className=''>
        <Tabs
          aria-label='Options'
          isVertical={isVertical}
          selectedKey={pathname}
          onSelectionChange={handleTabChange}
          color='primary'
          className='overflow-hidden'
          classNames={{
            cursor: 'bg-[#674736] hover:bg-[#7D5C3B] active:bg-[#d0d0d0] ',
            tabContent: 'text-black hover:text-[#674736] active:text-[#7D5C3B]',
            tabList: 'bg-white',
            tab: 'p-4',
            panel: 'p-0',
          }}
        >
          <Tab key='/admin' title='주문현황'>
            <Link href='/admin'></Link>
          </Tab>
          <Tab key='/admin/print' title='주문서 출력'>
            <Link href='/admin/print'></Link>
          </Tab>
          <Tab key='/admin/pickup' title='음료 수령'>
            <Link href='/admin/pickup'></Link>
          </Tab>
          <Tab key='/admin/survey' title='주문 생성'>
            <Link href='/admin/survey'></Link>
          </Tab>
          <Tab key='/admin/notice' title='공지사항'>
            <Link href='/admin/notice'></Link>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
