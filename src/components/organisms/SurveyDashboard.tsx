'use client';
import dynamic from 'next/dynamic';
import GroupTabs from '../molecules/GroupTabs';
import SemesterTabs from '../molecules/SemesterTabs';
import StatusTabs from '../molecules/StatusTabs';
import SurveyOrderStatus from '../molecules/SurveyOrderStatus';
import SurveyOrderTable from '../molecules/SurveyOrderTable';

const AchievementChips = dynamic(() => import('../molecules/AchievementChips'));

export default function SurveyDashboard() {
  const achievement = [
    { day: 1, achievement: 24 },
    { day: 2, achievement: 16 },
    { day: 3, achievement: 16 },
    { day: 4, achievement: 16 },
    { day: 5, achievement: 16 },
  ];

  return (
    <>
      <div className='flex flex-col overflow-auto w-full'>
        {/* <WeekdayTabs all ariaLabel='SurveyWeekdays' /> */}
        <SemesterTabs color='primary' ariaLabel='SurveySemesters' />
        <GroupTabs color='warning' ariaLabel='SurveyGroups' />

        <StatusTabs color='success' ariaLabel='SurveyStatus' />
        <p>상태 변경</p>
        <SurveyOrderStatus />

        <AchievementChips achievement={achievement} color='warning' />
      </div>
      <SurveyOrderTable />
    </>
  );
}
