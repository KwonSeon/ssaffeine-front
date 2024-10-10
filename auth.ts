import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        region: { label: 'Region', type: 'text', placeholder: 'Region' },
        SClass: { label: 'SClass', type: 'text', placeholder: 'Class' },
        name: { label: 'Name', type: 'text', placeholder: 'Your Name' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { region, SClass, name, password } = credentials;

        // 임시 사용자 데이터
        const dummyUser = {
          uuid: 1,
          name: 'John Doe',
          region: 'Seoul',
          SClass: 'A',
          password: 'test123', // 테스트용 비밀번호
        };

        // 비밀번호 일치 여부 확인
        if (
          name === dummyUser.name &&
          password === dummyUser.password &&
          region === dummyUser.region &&
          SClass === dummyUser.SClass
        ) {
          return {
            uuid: dummyUser.uuid,
            name: dummyUser.name,
            region: dummyUser.region,
            SClass: dummyUser.SClass,
            accessToken: 'dummy-accessToken',
          };
        } else {
          // 비밀번호 또는 사용자 이름이 일치하지 않으면 null 반환
          return null;
        }

        // let user = null;

        // // logic to salt and hash password
        // // 암호 hash로 변환
        // // TODO: 암호 hash로 변환하는 로직 추가
        // const pwHash = saltAndHashPassword(password);

        // // logic to verify if the user exists
        // // session에 저장할 사용자 정보를 가져옴
        // // TODO: 로그인 api로 변경
        // user = await getUserFromDb(region, SClass, name, pwHash);

        // if (!user) {
        //   // No user found, so this is their first attempt to login
        //   // meaning this is also the place you could do registration
        //   throw new Error('User not found.');
        // }

        // // return user object with their profile data
        // return { ...user, accessToken: '' };
      },
    }),
  ],

  // session을 jwt로 설정
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 1, // 1 hour
  },
});
