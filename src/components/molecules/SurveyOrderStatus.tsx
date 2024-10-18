'use client';

import { Button } from '@nextui-org/react';

export default function SurveyOrderStatus() {
  return (
    <div className='flex'>
      <Button color='primary'>입금확인중</Button>
      <Button color='primary'>입금완료</Button>
      <Button color='primary'>주문취소</Button>
    </div>
  );
}
