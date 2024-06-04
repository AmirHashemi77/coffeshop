import React from 'react';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import Footer from '../Component/Footer/Footer';
import ProductDetailsSection from '../Component/ProductDetails/ProductDetailsSection';
import CommentSection from '../Component/ProductDetails/CommentSection';
import AddNewComment from '../Component/ProductDetails/AddNewComment';

const ProductDetails = () => {
    return (
    <div className='flex flex-col items-center justify-center '>
        <div className='w-full lg:hidden'>
             <HeaderSm/>
        </div>
        <MenuSm/>
        <HeaderMd/>


        <div className='flex flex-col items-center gap-16 w-full m-36 px-5'>
          <ProductDetailsSection/>
          <CommentSection/>
          <AddNewComment/>
        </div>





        <div class="hidden absolute top-28 right-0 rotate-180 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
        <div class="hidden absolute -bottom-5 left-0 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
        <Footer/>
    </div>
    );
};

export default ProductDetails;