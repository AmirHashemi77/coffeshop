import React from 'react';

const CartItem = () => {
    return (
        <div className='flex items-center justify-between w-full py-4 px-3 border-b border-white border-opacity-20'>
            {/* product img  */}
            <div className='flex items-center justify-center'>
                <img src="/images/product/1b18a0fb617b2a74ca210364083c4782.png" alt="product" className=' w-20 h-20 object-contain object-center'/>
                <span className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>Arabica</span>
            </div>
            {/* num of product  */}
            <div className='flex flex-row items-center gap-3'>
                <button className='flex items-center justify-center rounded-full w-10 h-10 bg-brown1 text-brown4 text-[2rem] '>+</button>
                    <input type="text" className='w-10 h-10 text-xl px-4 py-2 rounded-lg' value='1' readOnly />
                <button className='flex items-center justify-center rounded-full w-10 h-10  bg-brown1 text-brown4 text-[2rem]'>-</button>
            </div>
            {/* price  */}
            <p className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>34$</p>
        </div>
    );
};

export default CartItem;