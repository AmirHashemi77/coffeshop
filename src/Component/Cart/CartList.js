import React from 'react';
import CartItem from './CartItem';

const CartList = ({cartItems}) => {
    return (
        <div className='flex flex-col items-center w-full max-w-4xl '>
            {
                cartItems?.map((item)=>(
                    <CartItem imgUrl={item.image} id={item.is} number={item.number} price={item.price} title={item.title} key={item.id}/>

                ))
            }
            
        </div>
    );
};

export default CartList;