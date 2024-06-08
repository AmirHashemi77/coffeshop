import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SliderCard = ({imgurl,title,subTitle,cardWidth}) => {
    const cardEl=useRef();
    useEffect(()=>{
        if(cardWidth)
       cardWidth(cardEl.current.getBoundingClientRect().width)
    },[cardWidth])
   

    return (
        <div ref={cardEl} className='flex flex-col items-center justify-center bg-card-slider2 px-3 relative'>
            <div className='flex items-center relative mb-20'>
                <Link className='flex items-center justify-center w-full' to='/product/productid'>
                    <img src={imgurl} alt="" className='w-60 h-72 object-contain object-center ' />
                </Link>
                <div className='absolute top-5 left-0'>
                    <img src="/images/icon/ph_info.svg" alt="" />
                </div>
                <div className='absolute bottom-3 right-0'>
                    <img src="/images/icon/ph_shopping-cart-simple-thin.svg" alt="" />
                </div>
            </div>
            <div className='product-slider-card-bottom'>
                <p className='text-white text-base font-normal'>{title}</p>
                <span className='rotate-90 h-[1px] w-7'></span>
                <p className='text-white text-base font-normal'>{subTitle}</p>
            </div>
        </div>
    );
};

export default SliderCard;