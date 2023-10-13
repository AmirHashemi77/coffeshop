import React from 'react';
import VespaIcon from '../../../icons/VespaIcon';

const CardHero = () => {
    return (
        <div className='flex item-center py-2 rounded-t-xl w-1/2 h-20 bg-cart-hero absolute bottom-0 '>
        <img src="/images/Cup1.png" alt="cup" className='w-1/3 h-full object-contain object-center drop-shadow-lg'/>
        <div className='flex flex-col items-center justify-between w-2/3 px-2'>
            <h5 className='font-dancingScript text-lg bg-text w-full whitespace-nowrap capitalize'>but first coffee</h5>
            <button className='flex items-center justify-center btn px-2 rounded-3xl'>
                <span className='font-leiko text-2xs whitespace-nowrap bg-text px-1 capitalize'>hurry up</span>
                <VespaIcon/>
            </button>
            
        </div>
    </div>
    );
};

export default CardHero;