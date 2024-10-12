'use client';

import useResizeMenubar from '@/hook/useResizeMenubar';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { Key } from 'react';

export default function UserTabs() {
  const pathname = usePathname();
  const router = useRouter();
  // TODO: uuid 경로 수정
  const uuid = '1234-abcd'; // 실제로 이 부분을 동적으로 설정

  const handleTabChange = (key: Key) => {
    const path = String(key); // Key를 string으로 변환
    router.push(path); // 경로 변경
  };

  // 메뉴바의 방향을 결정
  let isVertical = useResizeMenubar();

  // 현재 경로를 기준으로 선택된 탭을 설정
  const selectedKey = (() => {
    if (pathname.startsWith('/mypage/profile')) {
      return `/mypage/profile/${uuid}`; // 동적 uuid 경로 처리
    } else {
      return pathname; // 기본 경로
    }
  })();

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
          <Tab key='/mypage' title='주문현황' />
          <Tab key='/mypage/history' title='주문내역' />
          <Tab key='/mypage/preset' title='프리셋' />
          <Tab key={`/mypage/profile/${uuid}`} title='개인정보' />
        </Tabs>
      </CardBody>
    </Card>
  );
}
