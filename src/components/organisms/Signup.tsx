import { Modal } from '../atoms/Modal';
import SignupForm from '../molecules/SignupForm';

export default function Signup() {
  return (
    <Modal title='회원가입'>
      <div className='h-full w-full'>
        <SignupForm />
      </div>
    </Modal>
  );
}
