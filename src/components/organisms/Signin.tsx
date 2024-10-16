import { auth } from '@/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Modal } from '../atoms/Modal';
import SigninForm from '../molecules/SigninForm';

export default async function Signin() {
  const session = await auth();
  console.log('session:', session);

  if (session) {
    redirect('/');
  }

  return (
    <Modal title='로그인'>
      <div className='h-full w-full'>
        <SigninForm />
      </div>
      <div className='flex justify-end mt-4'>
        <Link href='/auth/signup'>회원가입</Link>
      </div>
    </Modal>
  );
}
