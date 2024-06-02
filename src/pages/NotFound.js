import React from 'react';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import Footer from '../Component/Footer/Footer';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
        <div className='w-full lg:hidden'>
             <HeaderSm/>
         </div>
             <MenuSm/>
             <HeaderMd/>
                <div className='flex flex-col items-center mt-15 gap-12 w-full max-w-5xl md:mt-36'>
                    <h2 className='text-brown1 font-bold text-6xl md:text-9xl text-center'>404</h2>
                    <p className='text-brown1 text-base md:text-lg text-center'>Page Not Found</p>
                </div>
             <div class="hidden absolute top-28 right-0 rotate-180 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
             <div class="hidden absolute -bottom-5 left-0 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
     <Footer/>
 </div>
    );
};

export default NotFound;