import React from 'react';
import CardHero from './CardHero';

const HeroMd = () => {
    return (
        <div className='flex relative h-[90%] z-10 pl-28'>

                <div className='flex flex-col items-start gap-10 w-1/3'>
                    <h1 className='hero-title font-dancingScript text-8xl capitalize'>elza coffee</h1>
                    <p className='text-xl font-leiko text-[#DABB9E] text-left'>
                        Today's good mood is sponsored by coffee
                        search for your coffee now
                    </p>
                    <div className='flex items-center space-x-3'>
                        <button className='btn rounded-3xl py-2 px-3 text-[#F8E4BE] font-leiko capitalize'>calaog</button>
                        <button className='btn rounded-3xl py-2 px-3 text-[#F8E4BE] font-leiko capitalize'>shop now</button>
                    </div>
                </div>
              <div className='relative w-full  h-full flex-1'>
                <img src="/images/hero-img.png" alt="hero-img" className='h-full w-full'/>
                <img src="/images/Coffees.png" alt="coffees" className='absolute top-0 right-0 w-3/4 h-full drop-shadow-lg'/>

            </div>
                <CardHero/>
        </div>
    );
};

export default HeroMd;