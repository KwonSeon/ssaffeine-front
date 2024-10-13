'use client';

import useAdminContext from '@/context/AdminProvider';

export default function Layout({
  children,
  newSurvey,
  updateSurvey,
}: {
  children: React.ReactNode;
  newSurvey: React.ReactNode;
  updateSurvey: React.ReactNode;
}) {
  const { nextSurveyState } = useAdminContext();

  return (
    <>
      {children}
      {nextSurveyState.surveysId ? updateSurvey : newSurvey}
    </>
  );
}
