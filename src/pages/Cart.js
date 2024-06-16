import React, { useContext } from 'react';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import Footer from '../Component/Footer/Footer';
import CartList from '../Component/Cart/CartList';
import BillSection from '../Component/Cart/BillSection';
import { useQuery } from '@tanstack/react-query';
import { fetchCartHandler } from '../services/cartHandler';
import { authContext } from '../context/AuthContext';
import Spinner from '../Component/Spinner/Spinner';


const Cart = () => {
    const {user}=useContext(authContext)
    const {error,isError,data , isLoading} = useQuery({
        queryKey:['fetchCart'],
        queryFn:()=>fetchCartHandler(user.id)

    })



    return (
        <div className='flex flex-col items-center justify-center '>
        <div className='w-full lg:hidden'>
             <HeaderSm/>
         </div>
             <MenuSm/>
             <HeaderMd/>
                { isLoading && !isError && <Spinner/>}
                { !isLoading && !isError && 
                       <div className='flex flex-col items-center gap-16 w-full m-36'>
                       <div className='flex flex-col items-center w-full px-5'>
                           <div className='flex flex-col items-center w-full max-w-5xl bg-card-slider p-5'>
                               <h4 className='section-title text-shadow absolute z-10 right-11 -top-6 md:text-5xl md:-top-8'>Cart</h4>          
                               <CartList cartItems={data}/>
                               <BillSection/>
                           </div>
                       </div>
                   </div>
                }
             <div className="hidden absolute top-28 right-0 rotate-180 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
             <div className="hidden absolute -bottom-5 left-0 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>

            
            
            

            <Footer/>
     
    </div>
    );
};

export default Cart;