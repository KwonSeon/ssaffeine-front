'use client';

import { SurveyIdProvider } from '@/context/SurveyIdProvider';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <SurveyIdProvider>{children}</SurveyIdProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
