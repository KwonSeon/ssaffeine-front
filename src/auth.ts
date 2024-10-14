import NextAuth, { CredentialsSignin } from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import authConfig from './auth.config';

class InvalidLoginError extends CredentialsSignin {
  code = 'Invalid identifier or password';
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  // pages: {
  //   // signIn: '/auth/signin',
  //   signIn: '/',
  //   // signOut: '/auth/signout',
  //   // newUser: '/auth/signup',
  // },
  providers: [
    credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        region: { label: 'Region', type: 'text' },
        group: { label: 'Group', type: 'text' },
        name: { label: 'Name', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Partial<Record<'name' | 'region' | 'group' | 'password', unknown>>) {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_SERVER_URL}/signin`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(credentials),
        // });

        // if (!response.ok) return null;

        // const user = await response.json();

        // 임시 비밀번호
        const user = {
          region: '부울경',
          group: 4,
          name: '권선',
          uuid: '1259815',
          password: '1234',
          role: 'admin',
          accessToken: 'someAccessToken', // Add this line
        };

        if (user.group != credentials.group || user.name != credentials.name || user.password != credentials.password)
          throw new InvalidLoginError();

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
