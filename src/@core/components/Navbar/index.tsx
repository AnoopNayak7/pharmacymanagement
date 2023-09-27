import React from 'react'
import Logo from '../../../assets/logos/logo.svg'
import Cart from '../../../assets/icons/shopping-cart.svg'
import User from '../../../assets/icons/user-circle.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='container py-4 flex justify-between items-center px-5 xl:px-0'>
        <Image src={Logo} alt={'My logo'} width={40} height={40}/>

        <div className='flex items-center gap-8'>
            <button><Image src={Cart} alt='' /></button>
            <button><Image src={User} alt='' /></button>
        </div>
    </nav>
  )
}

export default Navbar