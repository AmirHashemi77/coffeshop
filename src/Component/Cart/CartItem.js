import React from 'react';
import NumOfProduct from '../ProductDetails/NumOfProduct';

const CartItem = () => {
    return (
        <div className='flex flex-col gap-7 items-center justify-center w-full py-4 px-3 border-b border-white border-opacity-20 md2:flex-row md2:justify-between'>
            {/* product img  */}
            <div className='flex items-center justify-center'>
                <img src="/images/product/1b18a0fb617b2a74ca210364083c4782.png" alt="product" className=' w-20 h-20 object-contain object-center'/>
                <span className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>Arabica</span>
            </div>
            {/* num of product  */}
            <NumOfProduct/>
            {/* price  */}
            <p className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>34$</p>
        </div>
    );
};

export default CartItem;