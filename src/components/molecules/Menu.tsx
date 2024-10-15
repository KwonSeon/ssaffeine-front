'use client';
import { Button, NavbarItem } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Menu() {
  const router = useRouter();
  const session = useSession();
  const role = session?.data?.user?.role;

  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });

    router.refresh();
  };

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

      {session.status == 'authenticated' ? (
        <>
          <Button color='primary' variant='shadow' onPress={handleSignOut}>
            로그아웃
          </Button>
        </>
      ) : (
        <>
          <NavbarItem>
            <Button color='primary' variant='shadow' onPress={() => router.push('/auth/login')}>
              로그인
            </Button>
          </NavbarItem>
        </>
      )}
    </>
  );
}
