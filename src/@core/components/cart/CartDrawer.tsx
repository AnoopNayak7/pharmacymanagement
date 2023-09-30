import React, { useEffect, useState } from 'react';
import { Drawer, List, Button, Space, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  closeCart,
  clearCart,
} from '@/store/toolkit/cartSlice';
import { CloseOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

const CartDrawer: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const cartItems = useSelector((state: any) => state.cart.products);
  const dispatch = useDispatch();
  const router = useRouter();
  const [productDetails, setProductDetails] = useState<any[]>([]); 

  const user = useSelector((state: any) => state.user.user);
  const { id, name, email } = user || {}; 

  console.log(user)

  const createOrder = async () => {
    try {
      const response = await axios.post('http://localhost:3000/orders/create', {
        products: cartItems.map((item: any) => ({
          product: item._id,
          quantity: item.quantity,
        })),
        totalAmount: totalAmount.toFixed(2),
        customerName: name, 
        customerEmail: email, 
        userId: id, 
      });

      if (response.data.success) {
        notification.success({
          message: 'Order Created',
          description: 'Your order has been created successfully.',
        });
        dispatch(clearCart())

      } else {
        
        notification.error({
          message: 'Error',
          description: 'Failed to create the order.',
        });
      }
    } catch (error) {
      console.error('Error creating order:', error);
      notification.error({
        message: 'Error',
        description: 'An error occurred while creating the order.',
      });
    }
  };

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementQuantity = (itemId: number) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrementQuantity = (itemId: number) => {
    dispatch(decrementQuantity(itemId));
  };

  const totalQuantity = cartItems.reduce(
    (total: any, item: any) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total: any, item: any) => total + item.price * item.quantity,
    0
  );

  const handleEstimationpage = () => {
    dispatch(closeCart());
    router.push('/checkout');
  };

  // useEffect(() => {
  //   const productIds = Array.from(new Set(cartItems.map((item: any) => item._id)));

  //   const fetchProductDetails = async () => {
  //     try {
  //       const productDetailsPromises = productIds.map(async (productId) => {
  //         const response = await fetch(`http://localhost:3000/products/${productId}`); 
  //         const data = await response.json();
  //         return data;
  //       });

  //       const productDetailsData = await Promise.all(productDetailsPromises);

  //       setProductDetails(productDetailsData);
  //     } catch (error) {
  //       console.error('Error fetching product details:', error);
  //     }
  //   };

  //   fetchProductDetails();
  // }, [cartItems]);

  return (
    <Drawer
      title="Shopping Cart"
      placement="right"
      width={500}
      closable={true}
      onClose={onClose}
      visible={open}
      footer={
        <div>
          <div className='bg-gray-300 p-4 text-black rounded-md'>
            <div className=''>
              <div className='flex justify-between'>
                <p className='text-xs'>Total Amount: ₹{totalAmount.toFixed(2)}</p>
                <button className='hover:text-primary text-primary font-semibold' onClick={handleEstimationpage}>View breakup</button>
              </div>
            </div>
          </div>
          <div className='bg-primary p-4 text-white text-center rounded-md mt-5'>
            <button className='text-center hover:text-white' onClick={createOrder}>
              <div>
                <p className='text-2xl'>Checkout</p>
              </div>
            </button>
          </div>
        </div>
      }
    >
      <List
        dataSource={cartItems}
        renderItem={(item: any) => {
          const productDetail = productDetails.find((detail) => detail._id === item._id);

          return (
            <List.Item>
              <div className="p-3 w-full border border-gray-300 rounded-md relative">
                <Button
                  className="border-none absolute right-0 outline-none"
                  onClick={() => handleRemoveFromCart(item._id)}
                >
                  <CloseOutlined />
                </Button>
                <div className="">
                  <div className="text-base text-primary">{item.name}</div>
                  <p className="text-gray-500">Price: ₹{item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  {productDetail && (
                    <div>
                      <p className="text-gray-500">Description: {productDetail.description}</p>
                      <p className="text-gray-500">Manufacturer: {productDetail.manufacturer}</p>
                      {/* Add more product details here */}
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <Button onClick={() => handleIncrementQuantity(item._id)}>+</Button>
                  <Button onClick={() => handleDecrementQuantity(item._id)}>-</Button>
                </div>
              </div>
            </List.Item>
          );
        }}
      />
    </Drawer>
  );
};

export default CartDrawer;
