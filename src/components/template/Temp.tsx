import Link from 'next/link';

export default function Temp() {
  return (
    <div>
      <Link href={'/auth/login'}>로그인</Link>
    </div>
  );
}
