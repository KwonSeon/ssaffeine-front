import { Progress } from '@nextui-org/react';

export default function AchievementMeter({
  achievement,
  achievementGaol = 20,
}: {
  achievement: number;
  achievementGaol?: number;
}) {
  return (
    <>
      <p>{`이번 주 달성률 ${achievement} / ${achievementGaol}`}</p>
      <Progress
        size='lg'
        aria-label='Loading...'
        value={achievement * 5}
        color={achievement >= achievementGaol ? 'primary' : 'warning'}
      />
    </>
  );
}
