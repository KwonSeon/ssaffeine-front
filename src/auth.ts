import jwt from 'jsonwebtoken';
import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import login from './app/api/actions/login';
import authConfig from './auth.config';

// class InvalidLoginError extends CredentialsSignin {
//   loginId = '아이디가 일치하지 않습니다.';
//   password = '비밀번호가 일치하지 않습니다.';
// }

export const { handlers, signIn, signOut, auth } = NextAuth({
  // pages: {
  //   signIn: '/auth/signin',
  //   // signOut: '/auth/signout',
  //   newUser: '/auth/signup',
  // },
  providers: [
    credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // credentials: {
      //   loginId: { label: 'loginId', type: 'text' },
      //   password: { label: 'Password', type: 'password' },
      // },
      async authorize(credentials) {
        const res = await login(credentials.loginId as string, credentials.password as string);

        // const user = await res?.json();

        // JWT 토큰이 응답 헤더에 있다고 가정
        const accessToken = res?.headers.get('Authorization')?.split('Bearer ')[1];

        // 만약 헤더에 accessToken이 없다면 에러를 던짐
        if (!accessToken) throw new Error('JWT 토큰이 없습니다.');

        const decoded = jwt.verify(accessToken, process.env.NEXT_PUBLIC_JWT_SECRETKEY as string);

        const user = decoded as {
          region: string;
          group: number;
          username: string;
          uuid: string;
          role: string;
          semester: number;
        };

        return { ...user, accessToken };
      },
    }),
  ],

  // session을 jwt로 설정
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 1, // 1 hour
    ...authConfig,
  },
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken ?? '';
      session.user = token.user;

      // 세션을 `sessionStorage`에 저장, 클라이언트 종료 시 삭제
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('next-auth.session-token', token.accessToken ?? '');
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // return user as JWT
        token.accessToken = user.accessToken;
        token.user = {
          region: user.region,
          group: user.group,
          username: user.username,
          semester: user.semester,
          uuid: user.uuid,
          role: user.role,
        };
      }
      return token;
    },
  },
});
