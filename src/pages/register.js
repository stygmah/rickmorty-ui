import { useState } from 'react';
import { useRouter } from 'next/router';
import {signIn} from 'next-auth/react';
import Head from 'next/head';
import { Container, LoginCard, FieldContainer, SubmitButton } from '../styles/register.styled';
import { validateForm } from '@/helpers/validateInput';


export default function Register() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: '', password: '', repeatedPassword: '' });
  const [errors, setErrors] = useState({ email: null, password: null, repeatedPassword: null });

  const handleFieldChange = (field, value)=>{
    if(errors[field]){
      setErrors(validateForm(credentials));
    }
    setCredentials({...credentials, [field]: value});
  }

  const handleLogin = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    });

    if (result.error) {
      console.log(result.error);
    } else {
      router.push('/');
    }
  }

  const handleRegister = async () => {
    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/createUser`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          email: credentials.email, 
          password: credentials.password,
        }),
      });
      const result = await response.json();
      
      if (response.status === 500) {
        console.log(result.message)
        if(result.message?.includes('email is already in use')) {
          setErrors({...errors, email: 'Email already exists'});
        }
      } else {
        handleLogin();
      }
    } catch (error) {
      console.error(error)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(credentials));
    if (!errors.email || !errors.password || !errors.repeatedPassword) {
      handleRegister();
    }
  };

  return (
    <>
      <Head>
        <title>Rick and Morty App - Register</title>
        <meta name="description" content="Rick and morty app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <LoginCard>
            <h3>Login</h3>
            <FieldContainer>
              <label>Email</label>
              <input 
                type="email" 
                value={credentials.email} 
                onChange={({target})=> handleFieldChange('email', target.value)}
                onBlur={()=> setErrors(validateForm(credentials))}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </FieldContainer>
            <FieldContainer>
              <label>Password</label>
              <input 
                type="password" 
                value={credentials.password} 
                onChange={({target})=> handleFieldChange('password', target.value)}
                onBlur={()=> setErrors(validateForm(credentials))}
              />
              <span>Password must be at least 8 character long and contain numbers and letters</span>
              {errors.password && <span className="error">{errors.password}</span>}
            </FieldContainer>
            <FieldContainer>
              <label>Repeat Password</label>
              <input 
                type="password"  
                value={credentials.repeatedPassword} 
                onChange={({target})=> handleFieldChange('repeatedPassword', target.value)}
                onBlur={()=> setErrors(validateForm(credentials))}
              />
              {errors.repeatedPassword && <span className="error">{errors.repeatedPassword}</span>}
            </FieldContainer>
            <SubmitButton onClick={handleSubmit} type="submit" disabled={errors.email || errors.password || errors.repeatedPassword} >Register</SubmitButton>
          </LoginCard>
        </Container>
      </main>
    </>
  )
}
