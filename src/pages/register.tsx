import InputBox from '@/@core/components/InputBox'
import React, { useState } from 'react'
import Button from '@/@core/components/Button/button'
import Link from 'next/link'
import axios from 'axios';
import { notification } from 'antd';

const register = () => {
  const [formData, setFormData] = useState({
    name: '',
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

  const handleRegister = async (e:any) => {
    e.preventDefault()
    try {
      console.log('hhhhh', formData, JSON.stringify(formData))
      const response = await axios.post('http://localhost:3000/auth/register', formData)
      console.log(response)
      if(response.status == 200 && response.data.success){
        notification.success({
          message: 'Registration Successful',
          description: 'You have successfully registered.',
        });
      }   
    } catch (error) {
      notification.error({
        message: 'Registration failed',
        description: `${error}`,
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.password;

  return (
    <div className='flex justify-between h-[100vh] gap-10 items-center'>
      <div className='w-[60%] bg-primary h-full'>

      </div>
      <div className='w-[40%] px-16'>
        <div className='text-3xl'>Register</div>
        <p className='text-sm text-gray-500 mt-3'>Already have an account? <Link className='text-primary font-semibold' href={'/'}>SignIn here</Link></p>
        <form onSubmit={handleRegister}>
          <InputBox type={'email'} name='email' value={formData.email} placeholder='Enter your email' onChange={handleInputChange} />
          <InputBox type={'text'} name='name' value={formData.name} placeholder='Enter your username' onChange={handleInputChange} />
          <InputBox type={'password'} name='password' value={formData.password} placeholder='Enter your password' onChange={handleInputChange} />
          <Button disabled={!isFormValid}>Register</Button>
        </form>
      </div>
    </div>
  )
}

export default register