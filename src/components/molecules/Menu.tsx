'use client';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

export default function Menu() {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <menu className='flex'>
      <li>
        <Button color='primary' variant='light'>
          주문하기
        </Button>
      </li>
      <li>
        <Button color='primary' variant='light'>
          공지사항
        </Button>
      </li>
      <li>
        <Button color='primary' variant='light'>
          메뉴3
        </Button>
      </li>
      <li>
        <Button color='primary' variant='light'>
          메뉴4
        </Button>
      </li>
      <li>
        <Button color='primary' variant='shadow' onClick={handleClick}>
          {state ? '로그아웃' : '로그인'}
        </Button>
      </li>
    </menu>
  );
}
