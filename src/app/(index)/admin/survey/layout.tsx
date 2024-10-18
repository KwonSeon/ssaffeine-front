'use client';

import useAdminContext from '@/context/AdminProvider';

export default function Layout({
  createSurvey,
  updateSurvey,
}: {
  createSurvey: React.ReactNode;
  updateSurvey: React.ReactNode;
}) {
  const { nextSurveyState } = useAdminContext();

  return <>{nextSurveyState.surveysId ? updateSurvey : createSurvey}</>;
}
