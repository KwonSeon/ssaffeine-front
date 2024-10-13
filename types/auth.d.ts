// types/next-auth.d.ts

import 'next-auth';
import { DefaultSession } from 'next-auth';
import 'next-auth/jwt';

// session에 담길 user 정보 타입 정의
declare module 'next-auth' {
  interface User {
    region?: string;
    group?: number;
    name?: string;
    uuid?: string;
    role?: string;
    accessToken?: string;
  }

  interface Session extends DefaultSession {
    user?: User;
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: User;
    accessToken?: string;
  }
}
