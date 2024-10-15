import Link from 'next/link';
import { Modal } from '../atoms/Modal';
import LoginForm from '../molecules/LoginForm';

export default function Login() {
  return (
    <Modal title='로그인'>
      <div className='h-full w-full'>
        <LoginForm />
      </div>
      <div className='flex justify-end mt-4'>
        <Link href='/auth/signup'>회원가입</Link>
      </div>
    </Modal>
  );
}
