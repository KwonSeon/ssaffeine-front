'use client';
import { Button, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <NavbarItem>
        <Link href='/order'>
          <Button variant='light'>주문하기</Button>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/notice'>
          <Button variant='light'>공지사항</Button>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/mypage'>
          <Button variant='light'>마이페이지</Button>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/admin'>
          <Button variant='light'>관리자페이지</Button>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button color='primary' variant='shadow' onClick={handleClick}>
          {state ? '로그아웃' : '로그인'}
        </Button>
      </NavbarItem>
    </>
  );
}
