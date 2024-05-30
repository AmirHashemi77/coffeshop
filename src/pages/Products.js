import React from 'react';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import Footer from '../Component/Footer/Footer';

const Products = () => {
    return (
        <>
               <div className='flex flex-col items-center bg-hero lg:hidden'>
                      <HeaderSm/>
                </div>
                       <MenuSm/>
                      <HeaderMd/>



                      <div className='grid grid-cols-3  '></div>


            <Footer/>
        </>
    );
};

export default Products;