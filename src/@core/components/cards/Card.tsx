import React from 'react'
import Image from 'next/image'
import Button from '../Button/button';

const ProductCard = ({ product }: any) => {
    const { name, price, imageUrl } = product;
    return (
        <div className=' rounded-md bxsdw'>
            <div className='p-1'>
                <Image className='rounded-t-md' src={imageUrl} alt={''} />
            </div>
            <div className="product-details p-4">
                <h2 className="text-md font-semibold text-ellipsis whitespace-nowrap overflow-hidden">{name}</h2>
                <p className="text-md mt-3 font-sans font-semibold">₹ <span className='text-primary'>{price}</span></p>
                <div className='flex justify-center'>       
                    <Button className="mt-3">Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard