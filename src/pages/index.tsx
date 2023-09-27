
import { Inter } from 'next/font/google'
import InputBox from '@/@core/components/InputBox'
import Button from '@/@core/components/Button/button'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const handleLogin = () => {
    router.push('/home')
  }
  return (
    <div className='flex justify-between h-[100vh] gap-10 items-center'>
      <div className='w-[60%] bg-primary h-full hidden xl:block'>

      </div>
      <div className='w-full xl:w-[40%] xl:px-16'>
        <div className='text-3xl'>Login to your account</div>
        <p className='text-sm text-gray-500 mt-3'>Login to access your healthcare dashboard. Explore appointments, manage tasks and oversee records</p>
        <InputBox type={'email'} value={''} placeholder='Enter your email' onChange={() => {}} />
        <InputBox type={'password'} value={''}  placeholder='Enter your password' onChange={() => {}} />
        <Button onClick={handleLogin}>Login</Button>

        <p className='text-sm text-gray-500 mt-3'>Don't have an account? <Link className='text-primary font-semibold' href={'/register'}>SignUp here</Link></p>
      </div>
    </div>
  )
}
