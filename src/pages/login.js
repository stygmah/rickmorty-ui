import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import { Container, LoginCard, FieldContainer, SubmitButton, CreateAccountLink } from '../styles/login.styled';
import {signIn} from 'next-auth/react';
import { validateLogin } from '../helpers/validateInput';

export default function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try{
      const result = await signIn('credentials', {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });
  
      if (result.status === 401) {
        setError('Invalid email or password');
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>Rick and Morty App - Login</title>
        <meta name="description" content="Rick and morty app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <LoginCard>
            <form onSubmit={handleSubmit}>
              <h3>Login</h3>
              <FieldContainer>
                <label>Email</label>
                <input type="email" value={credentials.email} onChange={({target})=> setCredentials({...credentials, email: target.value})}/>
              </FieldContainer>
              <FieldContainer>
                <label>Password</label>
                <input type="password" value={credentials.password} onChange={({target})=> setCredentials({...credentials, password: target.value})}/>
              </FieldContainer>
              <SubmitButton type="submit" disabled={validateLogin}>Login</SubmitButton>
            </form>
            <span>{error}</span>
            <CreateAccountLink href={'/register'}>Create account</CreateAccountLink>
          </LoginCard>
        </Container>
      </main>
    </>
  )
}
