import React from 'react';

const SliderCard = () => {
    return (
        <div className='bg-card-slider2 px-3 relative'>
            <div className='flex items-center relative mb-20'>
                <img src="/images/product/1b18a0fb617b2a74ca210364083c4782.png" alt="" />
                <div className='absolute top-5 left-5'>
                    <img src="/images/icon/ph_info.svg" alt="" />
                </div>
                <div className='absolute bottom-5 right-5'>
                    <img src="/images/icon/ph_shopping-cart-simple-thin.svg" alt="" />
                </div>
            </div>
            <div className='product-slider-card-bottom'>
                <p className='text-white text-base font-normal'>Arabica</p>
                <span className='rotate-90 h-[1px] w-7 bg-red-500'></span>
                <p className='text-white text-base font-normal'>Dark Roast</p>
            </div>
        </div>
    );
};

export default SliderCard;