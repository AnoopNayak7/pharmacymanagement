import React from 'react';
import Image from 'next/image';
import Button from '../Button/button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/toolkit/cartSlice';
import axios from 'axios';
import { selectUserId } from '@/store/toolkit/userSlice';

const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  const addToCartHandler = async () => {
    try {
      // console.log(product._id, userId)
      // const response = await axios.post('http://localhost:3000/cart/add', {
      //   productItems: [
      //     {
      //       productId: product._id,
      //       quantity: 1,
      //     }
      //   ],
      //   userId: userId,
      // });
      dispatch(addToCart(product));
      // if (response.status === 201) {
      //   dispatch(addToCart(response.data.data));
      // } else {
      //   console.error('Failed to add item to cart');
      // }
    } catch (err) {
      console.error('Error adding item to cart:', err);
    }
    // console.log(product.name)
    // const response = await axios.post('http://localhost:3000/cart/add', {
    //     productId: product._id,
    //     quantity: 1,
    //     userId: userId,
    //   });
    // dispatch(addToCart(product)); 
  };

  return (
    <div className='rounded-md bxsdw mt-2'>
      <div className='p-1'>
        <Image className='rounded-t-md' src={product.imageUrl} alt={''} />
      </div>
      <div className='product-details p-4'>
        <h2 className='text-md font-semibold text-ellipsis whitespace-nowrap overflow-hidden h-14'>
          {product.name}
        </h2>
        <p className='text-md mt-3 font-sans font-semibold'>
          ₹ <span className='text-primary'>{product.price}</span>
        </p>
        <div className='flex justify-center mt-4'>
          <Button className='w-full' onClick={addToCartHandler}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
