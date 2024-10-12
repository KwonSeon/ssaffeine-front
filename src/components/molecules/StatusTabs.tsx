import { Tab, Tabs } from '@nextui-org/react';

export default function StatusTabs({
  color,
  ariaLabel,
}: {
  color: 'primary' | 'success' | 'warning' | 'secondary' | 'danger';
  ariaLabel?: string;
}) {
  const status = ['전체', '주문확인', '입금대기', '입금확인중', '입금완료'];
  return (
    <>
      <Tabs aria-label={ariaLabel} color='success'>
        {status.map((status, index) => (
          <Tab key={index} title={status} />
        ))}
      </Tabs>
    </>
  );
}
