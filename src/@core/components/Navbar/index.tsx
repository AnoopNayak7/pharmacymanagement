import React from 'react';
import { Badge, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'; 
import CartDrawer from '../cart/CartDrawer'; 
import Logo from '../../../assets/logos/logo.svg';
import Image from 'next/image'; 
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, openCart } from '@/store/toolkit/cartSlice';
import { clearUser } from '@/store/toolkit/userSlice';
import { useRouter } from 'next/router';

const Navbar = () => {
  const isCartOpen = useSelector((state: any) => state.cart.isCartOpen);
  const cartItems = useSelector((state: any) => state.cart.products); 
  const dispatch = useDispatch();
  const router = useRouter();

  const showCartDrawer = () => {
    dispatch(openCart()); 
  };

  const hideCartDrawer = () => {
    dispatch(closeCart())
  };

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem('access_token')
    router.push('/');
  };

  return (
    <nav className='container py-4 flex justify-between items-center px-5 xl:px-0'>
      <div>
        <Image src={Logo} alt={'My logo'} width={40} height={40} />
      </div>
      <div className='flex items-center gap-8'>
        <Badge count={cartItems.length}>
          <Button onClick={showCartDrawer}>
            <ShoppingCartOutlined style={{ fontSize: '24px' }} />
          </Button>
        </Badge>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      {isCartOpen && <CartDrawer onClose={hideCartDrawer} open={true} />}
    </nav>
  );
};

export default Navbar;
