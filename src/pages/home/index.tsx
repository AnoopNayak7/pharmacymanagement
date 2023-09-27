import InputBox from '@/@core/components/InputBox'
import ProductCard from '@/@core/components/cards/Card'
import React from 'react'
import tablet1 from '../../assets/logos/tablet.jpeg'

const productData = {
    title: 'Amitriptyline',
    price: 49.99,
    imageUrl: tablet1,
};

const index = () => {
    return (
        <div className=''>
            <div className='bg-primary-white xl:p-7 p-5 sm:p-6'>
                <div className='container'>
                    <div className='text-black text-center xl:text-3xl text-sm font-bold'>Get Highest Quality <br/>Medicines at Lowest cost</div>
                    <p className='text-center font-sans text-gray-500'>Delivered to your doorstep in hours</p>
                    <div className='w-[60%] mx-auto'>
                        <InputBox type={'text'} placeholder='Search (ctrl+v)' value={''} onChange={() => { }} />
                    </div>
                </div>
            </div>
            <div className='container my-10 '>
                Some common medicines
            </div>
            <div className='xl:grid xl:grid-cols-5 xl:gap-7 container px-5 xl:px-0'>
                <ProductCard product={productData} />
                <ProductCard product={productData} />
                <ProductCard product={productData} />
                <ProductCard product={productData} />
                <ProductCard product={productData} />
            </div>

            <div className='xl:grid xl:grid-cols-5 xl:gap-7 container px-5 xl:px-0 mt-16'>
                <ProductCard product={productData} />
                <ProductCard product={productData} />
                <ProductCard product={productData} />
                <ProductCard product={productData} />
                <ProductCard product={productData} />
            </div>
        </div>
    )
}

export default index