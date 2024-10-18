'use client';

import signup from '@/app/api/actions/signup';
import { Autocomplete, AutocompleteItem, Button, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const initialState: { message: string | null } = {
  message: null,
};

export default function SignupForm() {
  const [state, formAction] = useFormState(signup, initialState);
  const { pending } = useFormStatus();
  // const [semester, setSemester] = useState<number>(0);
  // const [region, setRegion] = useState<string>('E005');
  // const [group, setGroup] = useState<number>(0);
  const [username, setUsername] = useState<string>('');
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();

  // 지역
  const regionData = [
    { label: '서울', value: 'E001' },
    { label: '대전', value: 'E002' },
    { label: '구미', value: 'E003' },
    { label: '광주', value: 'E004' },
    { label: '부울경', value: 'E005' },
  ];

  // 기수
  const semesterData = [
    { label: '교육프로', value: 0 },
    { label: '11기', value: 11 },
    { label: '12기', value: 12 },
  ];

  // 반
  const groupData = [
    { label: '교육프로', value: 0 },
    { label: '1반', value: 1 },
    { label: '2반', value: 2 },
    { label: '3반', value: 3 },
    { label: '4반', value: 4 },
  ];

  useEffect(() => {
    if (state?.message === 'success') {
      router.push('/');
      router.refresh();
    }
  }, [state?.message, router]);

  return (
    <form action={formAction} className='flex flex-col gap-2'>
      <Autocomplete
        name='semester'
        defaultItems={semesterData}
        label='기수'
        placeholder='기수를 입력하세요'
        isInvalid={state?.message === 'no_semester' ? true : false}
        errorMessage={'기수를 입력하세요'}
        required
      >
        {(semesterData) => <AutocompleteItem key={semesterData.value}>{semesterData.label}</AutocompleteItem>}
      </Autocomplete>
      <Autocomplete
        name='region'
        defaultItems={regionData}
        label='지역'
        placeholder='지역을 입력하세요'
        isInvalid={state?.message === 'no_region' ? true : false}
        errorMessage={'지역을 입력하세요'}
        required
      >
        {(regionData) => <AutocompleteItem key={regionData.value}>{regionData.label}</AutocompleteItem>}
      </Autocomplete>
      <Autocomplete
        name='group'
        defaultItems={groupData}
        label='반'
        placeholder='반을 입력하세요'
        isInvalid={state?.message === 'no_group' ? true : false}
        errorMessage={'반을 입력하세요'}
        required
      >
        {(groupData) => <AutocompleteItem key={groupData.value}>{groupData.label}</AutocompleteItem>}
      </Autocomplete>
      <Input
        label='이름'
        name='username'
        variant='bordered'
        placeholder='이름을 입력하세요'
        value={username}
        onValueChange={setUsername}
        required
      />

      <Input
        label='아이디'
        name='loginId'
        variant='bordered'
        placeholder='아이디를 입력하세요'
        isInvalid={state?.message === 'fail' ? true : false}
        errorMessage={'중복된 아이디입니다'}
        value={loginId}
        onValueChange={setLoginId}
        required
      />

      <Input
        label='비밀번호'
        name='password'
        type='password'
        variant='bordered'
        placeholder='비밀번호를 입력하세요'
        value={password}
        onValueChange={setPassword}
        isInvalid={password.length < 8}
        errorMessage='8자 이상 입력하세요'
        required
      />
      <Input
        label='비밀번호 확인'
        variant='bordered'
        type='password'
        placeholder='비밀번호를 다시 입력하세요'
        value={confirmPassword}
        onValueChange={setConfirmPassword}
        isInvalid={confirmPassword !== password}
        errorMessage='비밀번호가 일치하지 않습니다.'
        required
      />
      <Button type='submit' color='primary' disabled={pending} className='w-full'>
        회원가입
      </Button>
    </form>
  );
}
