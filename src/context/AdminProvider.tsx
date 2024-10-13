'use client';
import React, { createContext, useContext, useReducer } from 'react';
import { initialNextSurveyState, NextSurveyAction, nextSurveyReducer, NextSurveyState } from './nextSurveyReducer';

// AdminContextType 인터페이스를 선언합니다.
interface AdminContextType {
  nextSurveyState: NextSurveyState;
  nextSurveyDispatch: React.Dispatch<NextSurveyAction>;
}

// AdminContextType 인터페이스를 사용하여 AdminContext를 생성합니다.
const AdminContext = createContext<AdminContextType>({
  nextSurveyState: initialNextSurveyState,
  nextSurveyDispatch: () => {},
});

// AdminContextProvider 함수를 선언합니다.
export function AdminContextProvider({ children }: { children: React.ReactNode }) {
  const [nextSurveyState, nextSurveyDispatch] = useReducer(nextSurveyReducer, initialNextSurveyState);

  return (
    <AdminContext.Provider
      value={{
        nextSurveyState,
        nextSurveyDispatch,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

// useAdminContext 함수를 선언합니다.
function useAdminContext() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdminContext must be used within an AdminContextProvider');
  }
  return context;
}

// useAdminContext 함수를 내보냅니다.
export default useAdminContext;
