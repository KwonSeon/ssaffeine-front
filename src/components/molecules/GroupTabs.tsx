'use client';
import { Tab, Tabs } from '@nextui-org/react';

export default function GroupTabs({
  color,
  ariaLabel,
}: {
  color: 'primary' | 'success' | 'warning' | 'secondary' | 'danger';
  ariaLabel?: string;
}) {
  const group = ['전체', '1반', '2반', '3반', '4반'];
  return (
    <>
      <Tabs aria-label={ariaLabel} color={color}>
        {group.map((group, index) => (
          <Tab key={`grouptab-${index}`} title={group} />
        ))}
      </Tabs>
    </>
  );
}
