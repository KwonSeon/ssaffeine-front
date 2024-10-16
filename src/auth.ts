import NextAuth, { CredentialsSignin } from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import authConfig from './auth.config';

class InvalidLoginError extends CredentialsSignin {
  loginId = '아이디가 일치하지 않습니다.';
  password = '비밀번호가 일치하지 않습니다.';
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    newUser: '/auth/signup',
  },
  providers: [
    credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // credentials: {
      //   loginId: { label: 'loginId', type: 'text' },
      //   password: { label: 'Password', type: 'password' },
      // },
      async authorize(credentials) {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER_URL}/signin`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(credentials),
        // });

        // if (!res.ok) return null;

        // const user = await res.json();

        // // JWT 토큰이 응답 헤더에 있다고 가정
        // const accessToken = res.headers.get('Authorization')?.split('Bearer ')[1];

        // // 만약 헤더에 accessToken이 없다면 에러를 던짐
        // if (!accessToken) throw new Error('JWT 토큰이 없습니다.');

        // return { ...user, accessToken };

        // 임시 비밀번호
        const user = {
          region: '부울경',
          group: 4,
          name: '권선',
          uuid: '1259815',
          password: '1234',
          role: 'ROLE_ADMIN',
          loginId: 'ssafy',
          accessToken: 'someAccessToken', // Add this line
        };

        if (user.loginId != credentials.loginId) throw new InvalidLoginError().loginId;

        if (user.password != credentials.password) throw new InvalidLoginError().password;

        return user;
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

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // return user as JWT
        token.accessToken = user.accessToken;
        token.user = {
          region: user.region,
          group: user.group,
          name: user.name,
          uuid: user.uuid,
          role: user.role,
        };
      }
      return token;
    },
  },
});
