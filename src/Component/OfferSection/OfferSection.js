import React from 'react';
import { Link } from 'react-router-dom';

const OfferSection = () => {
    return (
        <div className='w-full my-16 relative md:my-32' data-aos="fade-up">
            <div className='max-w-7xl mx-auto px-7'>
                <div className='w-full card-border-right my-12 mx-auto py-7 relative bg-card-slider2'>
                        <h4 className='section-title text-shadow absolute z-10 left-11 -top-6 md:text-5xl md:-top-8'>Offer</h4>
                        <div className='flex flex-col-reverse justify-between items-center w-full py-2 px-10 md:flex-row'>
                            <div className='flex flex-col justify-between items-center gap-8 w-full md:flex-1 md:items-start'>
                                <h5 className='section-title capitalize text-center !font-leiko '>Up to <span className='text-5xl'>50%</span> off</h5>
                                <p className='text-white text-xs text-center line-clamp-3 font-leiko font-normal leading-8 md:text-start md:text-sm md:leading-8'>
                                    At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness. 
                                </p>
                                <Link to='/products' className='btn rounded-3xl py-2 px-3 w-full text-brown1 font-leiko capitalize bg-btn2 lg:text-2xl lg:px-7 md:w-auto'>Shop Now</Link>
                            </div>
                            <img src="/images/product/cea2f73f692d663ab2e2f8cf3ab8cefb.png" alt="product" className='max-w-sm w-64 h-80 md2:w-96 object-contain object-center'/>
                        </div>
                        
                    
                </div>
            </div>
            <div className='hidden absolute -bottom-56 -left-3 md:block z-0'>
                <img src="/images/icon/bg-cofe2.svg" alt="" />
            </div>
        </div>
    );
};

export default OfferSection;