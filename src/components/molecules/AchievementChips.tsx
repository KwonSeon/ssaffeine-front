import formatNumberToDay from '@/utils/formatNumberToDay';
import { Chip } from '@nextui-org/react';

export default function AchievementChips({
  achievement,
  achievementGoal = 20,
  color,
  className,
  divClassName,
}: {
  achievement: { day: number; achievement: number }[];
  achievementGoal?: number;
  color: 'primary' | 'success' | 'warning' | 'secondary' | 'danger';
  className?: string;
  divClassName?: string;
}) {
  return (
    <div className={`flex ${divClassName}`}>
      {achievement.map((achievement, index) => (
        <Chip
          key={index}
          startContent={<p className='pl-2'>{formatNumberToDay(achievement.day)}</p>}
          variant={achievement.achievement >= achievementGoal ? 'shadow' : 'bordered'}
          color={color}
          className={className}
        >
          {`${achievement.achievement} / ${achievementGoal}`}
        </Chip>
      ))}
    </div>
  );
}
