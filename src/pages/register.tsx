import InputBox from '@/@core/components/InputBox'
import React from 'react'
import Button from '@/@core/components/Button/button'
import Link from 'next/link'

const register = () => {
  return (
    <div className='flex justify-between h-[100vh] gap-10 items-center'>
      <div className='w-[60%] bg-primary h-full'>

      </div>
      <div className='w-[40%] px-16'>
        <div className='text-3xl'>Register</div>
        <p className='text-sm text-gray-500 mt-3'>Already have an account? <Link className='text-primary font-semibold' href={'/'}>SignIn here</Link></p>
        <InputBox type={'email'} value={''} placeholder='Enter your email' onChange={() => {}} />
        <InputBox type={'text'} value={''}  placeholder='Enter your username' onChange={() => {}} />
        <InputBox type={'password'} value={''}  placeholder='Enter your password' onChange={() => {}} />
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default register