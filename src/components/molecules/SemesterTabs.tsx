'use client';
import { Tab, Tabs } from '@nextui-org/react';

export default function SemesterTabs({
  color,
  ariaLabel,
}: {
  color: 'primary' | 'success' | 'warning' | 'secondary' | 'danger';
  ariaLabel?: string;
}) {
  const semester = ['전체', '교육프로', '11기', '12기'];
  return (
    <>
      <Tabs aria-label={ariaLabel} color={color}>
        {semester.map((semester, index) => (
          <Tab key={`semestertab-${index}`} title={semester} />
        ))}
      </Tabs>
    </>
  );
}
