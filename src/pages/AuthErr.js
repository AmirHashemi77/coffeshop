import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import Footer from '../Component/Footer/Footer';

const AuthErr = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
        <div className='w-full lg:hidden'>
             <HeaderSm/>
         </div>
             <MenuSm/>
             <HeaderMd/>


            <div className='flex flex-col gap-16 items-center mt-36'>
                <h5 className='text-brown1 font-bold text-3xl md:text-4xl text-center capitalize'>signup or login to view this page</h5>
                <div className='flex items-center gap-5'>
                    <Link to='/login' className='btn bg-btn2 rounded-3xl py-3 px-9 text-brown1 font-leiko text-2xl'>LogIn</Link>
                    <Link to='/signup' className='btn bg-btn2 rounded-3xl py-3 px-9 text-brown1 font-leiko text-2xl'>SignUp</Link>

                </div>
            </div>
             <div className="hidden absolute top-28 right-0 rotate-180 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
             <div className="hidden absolute -bottom-5 left-0 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>

            
            
            

            <Footer/>
     
    </div>
    );
};

export default AuthErr;