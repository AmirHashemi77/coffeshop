import React from 'react';
import CartItem from './CartItem';

const CartList = () => {
    return (
        <div className='flex flex-col items-center w-full max-w-4xl '>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    );
};

export default CartList;