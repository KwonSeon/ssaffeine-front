import { Progress } from '@nextui-org/react';
import React from 'react';

export default function AchievementMeter({ achievement }: { achievement: number }) {
  return (
    <>
      <h1>{`이번 주 달성률 ${achievement} / 20`}</h1>
      <Progress size='lg' aria-label='Loading...' value={achievement * 5} />
    </>
  );
}
