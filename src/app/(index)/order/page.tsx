'use client';
import { CustomCheckbox } from '@/components/atoms/CustomCheckbox';
import { CheckboxGroup } from '@nextui-org/react';
import { useState } from 'react';

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [groupSelected, setGroupSelected] = useState<string[]>([]);

  return (
    <div className='flex'>
      <div className='flex flex-col gap-1 w-fit'>
        <CheckboxGroup
          label='나의 주문'
          value={groupSelected}
          onChange={setGroupSelected}
          classNames={{
            base: 'w-full',
            label: 'text-center',
          }}
        >
          <CustomCheckbox
            value='1'
            user={{
              name: '월요일',
              username: 'jrgarciadev',
              url: 'https://twitter.com/jrgarciadev',
              role: 'Software Developer',
              status: 'Active',
            }}
            statusColor='secondary'
          />
          <CustomCheckbox
            value='2'
            user={{
              name: '화요일',
              username: 'johndoe',
              url: '#',
              role: 'Product Designer',
              status: 'Vacation',
            }}
            statusColor='warning'
          />
          <CustomCheckbox
            value='3'
            user={{
              name: '수요일',
              username: 'zoeylang',
              url: '#',
              role: 'Technical Writer',
              status: 'Out of office',
            }}
            statusColor='danger'
          />
          <CustomCheckbox
            value='4'
            user={{
              name: '목요일',
              username: 'william',
              url: '#',
              role: 'Sales Manager',
              status: 'Active',
            }}
            statusColor='secondary'
          />
          <CustomCheckbox
            value='5'
            user={{
              name: '금요일',
              username: 'johndoe',
              url: '#',
              role: 'Product Designer',
              status: 'Vacation',
            }}
            statusColor='warning'
          />
        </CheckboxGroup>
        <p className='mt-4 ml-1 text-default-500'>
          Selected: {groupSelected.join(', ')}
        </p>
      </div>
      <div>세부 옵션 설정</div>
    </div>
  );
}
