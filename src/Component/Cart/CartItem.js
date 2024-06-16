import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import NumOfProduct from '../ProductDetails/NumOfProduct';
import { authContext } from '../../context/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { editCartHandler } from '../../services/cartHandler';

const CartItem = ({imgUrl ,title , price , id , number}) => {
    const {user}=useContext(authContext)
    const [numberOfProduct,setNumberOfProduct] = useState(number)
    const {error , isError , mutate} = useMutation({
        mutationKey:['cartEdit'],
        mutationFn:editCartHandler,
        onSuccess:()=>{
            alert("cart updated")
        }
    })
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
          }

          const newCart=[...user.cart,{
            id:id,
            title:title,
            price:price,
            image:imgUrl,
            number:numberOfProduct
        }]

        mutate({newCartData:newCart , userId:user.id})

          
    },[numberOfProduct])
    
    return (
        <div className='flex flex-col gap-7 items-center justify-center w-full py-4 px-3 border-b border-white border-opacity-20 md2:flex-row md2:justify-between'>
            {/* product img  */}
            <div className='flex items-center justify-center'>
                <img src={imgUrl} alt={title} className=' w-20 h-20 object-contain object-center'/>
                <span className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>{title}</span>
            </div>
            {/* num of product  */}
            <NumOfProduct number={numberOfProduct} setNumber={setNumberOfProduct}/>
            {/* price  */}
            <p className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>{`${price}$`}</p>
        </div>
    );
};

export default CartItem;