'use client';

import getSurveysId from '@/app/api/serveractions/getSurveysId';
import { createContext, useContext, useEffect, useState } from 'react';

interface SurveyIdContextType {
  surveysId: number | undefined;
  setSurveysId: (surveysId: number) => void;
}

const SurveyIdContext = createContext<SurveyIdContextType>({
  surveysId: undefined,
  setSurveysId: () => {},
});

export function SurveyIdProvider({ children }: { children: React.ReactNode }) {
  const [surveysId, setSurveysId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchSurveyId = async () => {
      try {
        const data = await getSurveysId();
        setSurveysId(data as number);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSurveyId();
  }, []);

  return (
    <SurveyIdContext.Provider
      value={{
        surveysId,
        setSurveysId,
      }}
    >
      {children}
    </SurveyIdContext.Provider>
  );
}

function useSurveyIdContext() {
  const context = useContext(SurveyIdContext);
  if (context === undefined) {
    throw new Error('useSurveyContext must be used within an SurveyProvider');
  }
  return context;
}

export default useSurveyIdContext;
