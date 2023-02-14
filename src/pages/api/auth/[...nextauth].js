import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers:[
    CredentialsProviders({
      name: 'Credentials',
      type: 'credentials',
      credentials: {},
      authorize: async (credentials, req) => {
        const { email, password } = credentials;
        if(!email || !password) {
          return null;
        }

        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ email, password }),
        });

        if (response.status !== 200) {
          return null;
        }
        const data = await response.json();
        return {email: data.email, token: data.token};
      }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: "gn/at8PhCZPuifFen2cajfByhmZgV4VONysYOadsDZU=",
};

export default NextAuth(authOptions);