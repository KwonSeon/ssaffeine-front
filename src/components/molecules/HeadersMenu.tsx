'use client';
import { Button, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HeadersMenu({ setIsMenuOpen }: { setIsMenuOpen: (value: boolean) => void }) {
  const router = useRouter();
  const session = useSession();
  const role = session?.data?.user?.role;

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
      {role === 'ROLE_ADMIN' && (
        <NavbarMenuItem>
          <Link href='/ROLE_ADMIN' onClick={() => setIsMenuOpen(false)}>
            <Button variant='light' size='lg'>
              관리자페이지
            </Button>
          </Link>
        </NavbarMenuItem>
      )}
      <NavbarMenuItem>
        {session.status === 'unauthenticated' ? (
          <Button
            variant='light'
            size='lg'
            onClick={() => {
              setIsMenuOpen(false);
              router.push('/auth/signin');
            }}
          >
            로그인
          </Button>
        ) : (
          <Button
            variant='light'
            size='lg'
            onClick={() => {
              setIsMenuOpen(false);
              signOut();
            }}
          >
            로그아웃
          </Button>
        )}
      </NavbarMenuItem>
    </NavbarMenu>
  );
}
