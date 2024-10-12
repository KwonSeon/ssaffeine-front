// types/next-auth.d.ts

import 'next-auth';
import { DefaultSession } from 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    region?: string;
    group?: number;
    name?: string;
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
