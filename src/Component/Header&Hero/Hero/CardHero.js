import React from 'react';
import VespaIcon from '../../../icons/VespaIcon';

const CardHero = () => {
    return (
        <div className='flex item-center py-2 rounded-t-xl h-20 bg-cart-hero absolute bottom-0 md:h-28 lg:w-fit lg:h-[25%]'>
        <img src="/images/Cup1.png" alt="cup" className='w-1/3 h-full object-contain object-center drop-shadow-lg'/>
        <div className='flex flex-col items-center justify-between lg:justify-center lg:gap-7 px-2'>
            <h5 className='font-dancingScript text-xl bg-text w-full whitespace-nowrap capitalize md:text-2xl md: lg:text-3xl'>but first coffee</h5>
            <button className='flex items-center justify-center btn px-2 rounded-3xl'>
                <span className='font-leiko text-xs whitespace-nowrap bg-text px-1 capitalize lg:text-lg lg:px-5'>hurry up</span>
                <VespaIcon width='30' height='30'/>
            </button>
            
        </div>
    </div>
    );
};

export default CardHero;