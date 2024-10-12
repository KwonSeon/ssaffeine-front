import { Tab, Tabs } from '@nextui-org/react';

export default function WeekdayTabs({
  all,
  variant = 'solid',
  defaultSelectedKey,
  ariaLabel,
  color = 'primary',
}: {
  all?: boolean;
  variant?: 'underlined' | 'solid';
  defaultSelectedKey?: number;
  ariaLabel?: string;
  color?: 'primary' | 'success' | 'warning' | 'secondary' | 'danger';
}) {
  const week = ['월', '화', '수', '목', '금'];
  return (
    <>
      <Tabs variant={variant} color={color} aria-label={ariaLabel} defaultSelectedKey={defaultSelectedKey}>
        {all && <Tab key='0' title='전체' />}
        {week.map((day, index) => (
          <Tab key={index + 1} title={day} />
        ))}
      </Tabs>
    </>
  );
}
