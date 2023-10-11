import React from 'react';
import VespaIcon from '../../icons/VespaIcon';

const HeroSm = () => {
    return (
        <div className='flex flex-col items-center w-full py-5'>
            <div className='w-full relative'>
                <img src="/images/hero-img.png" alt="hero-img" />
                <img src="/images/Coffees.png" alt="coffees" className='absolute top-0 right-0 w-3/4 h-3/4 '/>
                <div className='flex item-center py-2 rounded-t-xl w-1/2 h-20 bg-cart-hero absolute bottom-0 '>
                    <img src="/images/Cup1.png" alt="cup" className='w-1/3 h-full object-contain object-center'/>
                    <div className='flex flex-col items-center justify-between w-2/3 px-2'>
                        <h5 className='font-dancingScript text-lg bg-text w-full whitespace-nowrap capitalize'>but first coffee</h5>
                        <button className='flex items-center justify-center btn rounded-3xl'>
                            <span className='font-leiko text-2xs whitespace-nowrap bg-text px-1 capitalize'>hurry up</span>
                            <VespaIcon/>
                        </button>
                        
                    </div>
                </div>

            </div>


            <div className='flex flex-col items-center gap-10 w-full p-5'>
                <h1 className='text-7xl hero-title font-dancingScript capitalize'>elza coffee</h1>
                <p className='text-xl font-leiko text-[#DABB9E] text-center'>
                    Today's good mood is sponsored by coffee
                    search for your coffee now
                </p>
                <div className='flex items-center space-x-3'>
                    <button className='btn rounded-3xl py-2 px-3 text-[#F8E4BE] font-leiko capitalize'>calaog</button>
                    <button className='btn rounded-3xl py-2 px-3 text-[#F8E4BE] font-leiko capitalize'>shop now</button>
                </div>
            </div>

        </div>
    );
};

export default HeroSm;