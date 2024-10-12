'use client';

import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { Key, useEffect, useState } from 'react';

export default function AdminTabs() {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabChange = (key: Key) => {
    const path = String(key); // Key를 string으로 변환
    router.push(path); // 경로 변경
  };

  // 화면 크기에 따라 isVertical을 동적으로 설정
  const [isVertical, setIsVertical] = useState(true);

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

  // 현재 경로를 기준으로 선택된 탭을 설정
  const selectedKey = pathname.split('/').slice(0, 3).join('/');

  return (
    <Card isBlurred shadow='md' className='w-full lg:w-fit h-fit min-w-[112px]'>
      <CardBody className=''>
        <Tabs
          aria-label='Options'
          isVertical={isVertical}
          selectedKey={selectedKey}
          onSelectionChange={handleTabChange}
          color='primary'
          className='overflow-hidden'
        >
          <Tab key='/admin' title='주문현황' />
          <Tab key='/admin/print' title='주문서 출력' />
          <Tab key='/admin/pickup' title='음료 수령' />
          <Tab key='/admin/survey' title='주문 생성' />
          <Tab key='/admin/notice' title='공지사항' />
        </Tabs>
      </CardBody>
    </Card>
  );
}
