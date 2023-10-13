import React from 'react';
import CardHero from './CardHero';


const HeroSm = () => {
    return (
        <div className='flex flex-col items-center w-full py-5'>
            <div className='w-full relative'>
                <img src="/images/hero-img.png" alt="hero-img"/>
                <img src="/images/Coffees.png" alt="coffees" className='absolute top-0 right-0 w-3/4 h-3/4 drop-shadow-lg'/>
                <CardHero/>

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