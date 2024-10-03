import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        region: {},
        SClass: {},
        name: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { region, SClass, name, password } = credentials;
        let user = null;

        // logic to salt and hash password
        // 암호 hash로 변환
        // TODO: 암호 hash로 변환하는 로직 추가
        const pwHash = saltAndHashPassword(password);

        // logic to verify if the user exists
        // session에 저장할 사용자 정보를 가져옴
        // TODO: 로그인 api로 변경
        user = await getUserFromDb(region, SClass, name, pwHash);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error('User not found.');
        }

        // return user object with their profile data
        return { ...user, accessToken: '' };
      },
    }),
  ],

  // session을 jwt로 설정
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 1, // 1 hour
  },
});
