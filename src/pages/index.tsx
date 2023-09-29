import React, { useState } from 'react';
import InputBox from '@/@core/components/InputBox';
import Button from '@/@core/components/Button/button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { notification } from 'antd';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e:any) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/auth/login', formData, {
        withCredentials: true,
      });
      const access_token = response.data.data.access_token;
      if (response.status == 200 && response.data.success) {
        localStorage.setItem('access_token', access_token);
        notification.success({
          message: 'Login Successful',
          description: 'You have successfully loggedin.',
        });
        router.push('/home');
      } else {
        console.error('Login failed:', response.data.msg);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div className='flex justify-between h-[100vh] gap-10 items-center'>
      <div className='w-[60%] bg-primary h-full hidden xl:block'>

      </div>
      <div className='w-full xl:w-[40%] xl:px-16'>
        <div className='text-3xl'>Login to your account</div>
        <p className='text-sm text-gray-500 mt-3'>Login to access your healthcare dashboard. Explore appointments, manage tasks, and oversee records</p>
        <form onSubmit={handleLogin}>
        <InputBox type={'email'} name='email' value={formData.email} placeholder='Enter your email' onChange={handleInputChange} />
        <InputBox type={'password'} name='password' value={formData.password} placeholder='Enter your password' onChange={handleInputChange} />
        <Button>Login</Button>
        </form>
        <p className='text-sm text-gray-500 mt-3'>Don't have an account? <Link className='text-primary font-semibold' href={'/register'}>SignUp here</Link></p>
      </div>
    </div>
  );
};

export default Login;
