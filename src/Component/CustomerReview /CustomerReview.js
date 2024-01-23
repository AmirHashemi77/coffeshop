import React, { useEffect } from 'react';
import { useRef } from 'react';

const CustomerReview = () => {
    const slider=useRef()
    useEffect(()=>{
       
    },[])
    return (
        <div className='w-full my-16 relative md:my-36'>
            <div className='max-w-6xl mx-auto relative bg-customer-review'>
                <h4 className='section-title font-dancingScript font-bold capitalize absolute left-1/2 -top-10 -translate-x-1/2 md:text-6xl'>Customer Review</h4>
                <div ref={slider} className='customer-slider pt-20 relative bottom-0 overflow-y-hidden '>
                    <div className='flex flex-col items-center gap-6 customer-card translate-y-40'>
                        <img src="/images/profile/kelly-searle-209751-scaled 1.png" alt=""  className='w-[121px] h-[121px] object-contain rounded-full'/>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-base'>Tyler Student</p>
                        <div className='flex items-center gap-1'>
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                        </div>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-xs py-4'>
                        I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries. 
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-6 customer-card translate-y-40'>
                        <img src="/images/profile/bewakoof-com-official-208957 1.png" alt=""  className='w-[121px] h-[121px] object-contain rounded-full'/>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-base'>Tyler Student</p>
                        <div className='flex items-center gap-1'>
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                        </div>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-xs py-4'>
                        I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries. 
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-6 customer-card active '>
                        <img src="/images/profile/pexels-photo-26939-1-1024x1024 1.png" alt=""  className='w-[121px] h-[121px] object-contain rounded-full'/>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-base'>Tyler Student</p>
                        <div className='flex items-center gap-1'>
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                        </div>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-xs py-4'>
                        I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries. 
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-6 customer-card translate-y-40'>
                        <img src="/images/profile/kelly-searle-209751-scaled 1.png" alt=""  className='w-[121px] h-[121px] object-contain rounded-full'/>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-base'>Tyler Student</p>
                        <div className='flex items-center gap-1'>
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                        </div>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-xs py-4'>
                        I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries. 
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-6 customer-card translate-y-40'>
                        <img src="/images/profile/kelly-searle-209751-scaled 1.png" alt=""  className='w-[121px] h-[121px] object-contain rounded-full'/>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-base'>Tyler Student</p>
                        <div className='flex items-center gap-1'>
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                            <img src="/images/icon/material-symbols_star-half-rounded.svg" alt="" />
                        </div>
                        <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-xs py-4'>
                        I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries. 
                        </p>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;