'use client';

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SigninModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {
  const [message, setMessage] = useState('');
  const [region, setRegion] = useState<string>('부울경');
  const [group, setGroup] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // 로그인 처리
      const res = await signIn('credentials', {
        redirect: false,
        region: region,
        group: group.toString(),
        name: name,
        password: password,
      });

      if (res?.error) {
        // 로그인 실패 처리
        setMessage('비밀번호를 확인해주세요.');
        setPassword('');
      } else {
        router.push('/'); // 로그인 성공 후 이동할 페이지
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      setMessage('비밀번호를 확인해주세요.');
    }
  };

  const regionData = [
    {
      label: '서울',
      value: '서울',
    },
    {
      label: '대전',
      value: '대전',
    },
    {
      label: '구미',
      value: '구미',
    },
    {
      label: '광주',
      value: '광주',
    },
    {
      label: '부울경',
      value: '부울경',
    },
  ];

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Sign in</ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <Select label='Region' selectedKeys={[region]} onSelectionChange={(key) => setRegion(key as string)}>
                    {regionData.map((region) => (
                      <SelectItem key={region.value}>{region.label}</SelectItem>
                    ))}
                  </Select>
                  <Input
                    label='Group'
                    type='number'
                    value={group as unknown as string}
                    onChange={(e) => setGroup(Number(e.target.value))}
                  />

                  <Input
                    label='Name'
                    placeholder='이름'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    label='Password'
                    placeholder='비밀번호'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  {message && <div className='text-red-500 my-auto w-full text-center'>{message}</div>}
                  <Button color='danger' variant='flat' onPress={onClose}>
                    Close
                  </Button>
                  <Button color='primary' type='submit'>
                    Sign in
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
