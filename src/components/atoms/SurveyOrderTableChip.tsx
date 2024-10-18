import { Chip } from '@nextui-org/react';

export default function SurveyOrderTableChip({
  status,
}: {
  status: '주문확인' | '입금대기' | '입금확인중' | '입금완료' | '주문취소';
}) {
  let color: 'default' | 'primary' | 'warning' | 'success' | 'secondary' | 'danger' = 'default';

  switch (status) {
    case '주문확인':
      color = 'primary';
      break;
    case '입금대기':
      color = 'warning';
      break;
    case '입금확인중':
    case '입금완료':
      color = 'success';
      break;
    case '주문취소':
      color = 'danger';
      break;
  }

  return <Chip color={color}>{status}</Chip>;
}
