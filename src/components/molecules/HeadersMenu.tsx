'use client';
import { Button, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export default function HeadersMenu({ setIsMenuOpen }: { setIsMenuOpen: (value: boolean) => void }) {
  return (
    <NavbarMenu className='text-right bg-white'>
      <NavbarMenuItem>
        <Link href='/order' onClick={() => setIsMenuOpen(false)}>
          <Button variant='light' size='lg'>
            주문하기
          </Button>
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/notice' onClick={() => setIsMenuOpen(false)}>
          <Button variant='light' size='lg'>
            공지사항
          </Button>
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/mypage' onClick={() => setIsMenuOpen(false)}>
          <Button variant='light' size='lg'>
            마이페이지
          </Button>
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/admin' onClick={() => setIsMenuOpen(false)}>
          <Button variant='light' size='lg'>
            관리자페이지
          </Button>
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/admin' onClick={() => setIsMenuOpen(false)}>
          <Button variant='light' size='lg'>
            로그인
          </Button>
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
}
