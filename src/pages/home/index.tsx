import InputBox from '@/@core/components/InputBox'
import ProductCard from '@/@core/components/cards/Card'
import React, { useEffect, useState } from 'react'
import tablet1 from '../../assets/logos/tablet.jpeg'
import { useRouter } from 'next/router';
import { isAuthenticated } from '@/@core/helpers/aclGuard';

const productData = {
    title: 'Amitriptyline',
    price: 49.99,
    imageUrl: tablet1,
};

const index = () => {
    const router = useRouter();

    const [products, setProducts] = useState([]);


    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/');
        } else {
            fetchProducts();
        }
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/products/all');
            if (response.ok) {
                const data = await response.json();
                setProducts(data.data);
            } else {
                console.error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className=''>
            <div className='bg-primary-white xl:p-7 p-5 sm:p-6'>
                <div className='container'>
                    <div className='text-black text-center xl:text-3xl text-2xl font-bold'>Get Highest Quality <br />Medicines at Lowest cost</div>
                    <p className='text-center font-sans text-gray-500'>Delivered to your doorstep in hours</p>
                    <div className='xl:w-[60%] mx-auto'>
                        <InputBox type={'text'} placeholder='Search (ctrl+v)' value={''} onChange={() => { }} />
                    </div>
                </div>
            </div>
            
            <div className='xl:grid xl:grid-cols-5 xl:gap-7 container px-5 xl:px-0'>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default index