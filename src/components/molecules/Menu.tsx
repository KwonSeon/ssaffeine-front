'use client';
import { Button, NavbarItem } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Menu() {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => {
    setState(!state);
  };

  const router = useRouter();

  const session = useSession();
  console.log(session);
  const role = session?.data?.user?.role;

  return (
    <>
      <NavbarItem>
        <Button variant='light' onClick={() => router.push('/order')}>
          주문하기
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button variant='light' onClick={() => router.push('/notice')}>
          공지사항
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button variant='light' onClick={() => router.push('/mypage')}>
          마이페이지
        </Button>
      </NavbarItem>
      {role === 'admin' && (
        <NavbarItem>
          <Button variant='light' onClick={() => router.push('/admin')}>
            관리자페이지
          </Button>
        </NavbarItem>
      )}
      <NavbarItem>
        {/* TODO: 로그인, 로그아웃 처리 시 리다이렉트 */}
        <Button color='primary' variant='shadow' onClick={handleClick}>
          {state ? '로그아웃' : '로그인'}
        </Button>
      </NavbarItem>
    </>
  );
}
