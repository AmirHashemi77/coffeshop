import React from 'react';
import VespaIcon from '../../../icons/VespaIcon';

const CardHero = () => {
    return (
        <div className='flex item-center rounded-t-3xl bg-cart-hero absolute bottom-0 md:w-[28vw] lg:rounded-t-[50px]'>
        <img src="./images/Cup1.png" alt="cup" className='w-[17.33vw] h-[17.33vw] object-contain object-center drop-shadow-lg '/>
        <div className='flex flex-col items-center justify-center gap-2 px-2 lg:gap-7 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2'>
            <h5 className='font-dancingScript text-xs  bg-text whitespace-nowrap capitalize md:text-[1.93vw] md:leading-7 xl:leading-[3vw]'>but first coffee</h5>
            <button className='flex items-center justify-center btn px-2 space-x-1 rounded-3xl'>
                <span className='font-leiko text-2xs whitespace-nowrap bg-text  capitalize  lg:text-sm'>hurry up</span>
                <VespaIcon/>
            </button>
            
        </div>
    </div>
    );
};

export default CardHero;