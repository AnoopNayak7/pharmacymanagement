import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import Button from '@/@core/components/Button/button';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DownloadOutlined, WhatsAppOutlined } from '@ant-design/icons';
import axios from 'axios';
import { closeCart, openCart } from '@/store/toolkit/cartSlice';

const Checkout = () => {
    const cartItems = useSelector((state: any) => state.cart.products);
    const isCartOpen = useSelector((state: any) => state.cart.isCartOpen);

    const dispatch = useDispatch();

    const showCartDrawer = () => {
      dispatch(openCart()); 
    };
  
    const hideCartDrawer = () => {
      dispatch(closeCart())
    };
  

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price (per item)',
            dataIndex: 'price',
            key: 'price',
            render: (text: any, record: any) => `₹${record.price}`,
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (text: any, record: any) => `₹${record.total}`,
        },
    ];

    const data = cartItems.map((item: any) => ({
        key: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: (item.price * parseFloat(item.quantity)).toFixed(2),
    }));

    const grandTotal = data
        .reduce((acc: any, curr: any) => acc + parseFloat(curr.total), 0)
        .toFixed(2);

    const exportToPDF = () => {
        const doc = new jsPDF();

        html2canvas(document?.querySelector('.ant-table')).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            doc.save('cart_details.pdf');
        });
    };

    const shareOnWhatsApp = () => {
        const cartSummary = data
            .map((item: any) => `${item.name}: ${item.quantity} x $${item.price} = $${item.total}`)
            .join('\n');
        const message = `My Cart Details:\n\n${cartSummary}\n\nTotal: $${grandTotal}`;
        
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };


    return (
        <div className="container px-5 xl:px-0">
            <div className='flex justify-between items-center my-10'>
                <div>Cart Details</div>
                <div className='mt-8 flex items-center gap-2'>
                    <button className='bg-gray-100 px-4 py-2 rounded-sm font-sans text-sm flex items-center gap-2' onClick={exportToPDF}>
                        <DownloadOutlined />
                        <span className='hidden sm:block'>Export to PDF</span>
                    </button>
                    <button className='bg-green-400 px-4 py-2 rounded-sm font-sans text-sm flex items-center gap-2' onClick={shareOnWhatsApp}>
                        <WhatsAppOutlined />
                        <span className='hidden sm:block'>Share on WhatsApp</span>
                    </button>
                </div>
            </div>
            <Table columns={columns} dataSource={data} />

            <div className='bg-gray-100 p-4 mt-7'>
                <div className='flex justify-between items-center'>
                    <strong>
                        Grand Total: ₹
                        {grandTotal}
                    </strong>
                    <div>
                        <Button onClick={showCartDrawer}>Go back to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
