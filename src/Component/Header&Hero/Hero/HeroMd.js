import React from 'react';
import CardHero from './CardHero';

const HeroMd = () => {
    return (
        <div className='flex relative h-[92%] z-10 pl-10 xl:pl-28 '>

                <div className='flex flex-col items-start gap-10 w-1/3'>
                    <h1 className='hero-title font-dancingScript text-6xl capitalize lg:text-7xl xl:text-8xl 2xl:text-8xl'>elza coffee</h1>
                    <p className='text-xl font-leiko text-cream3 text-left xl:text-3xl'>
                        Today's good mood is sponsored by coffee
                        search for your coffee now
                    </p>
                    <div className='flex items-center space-x-3'>
                        <button className='btn rounded-3xl py-2 px-3 text-brown1 font-leiko capitalize bg-btn lg:text-2xl lg:px-7'>calaog</button>
                        <button className='btn rounded-3xl py-2 px-3 text-brown1 font-leiko capitalize bg-btn lg:text-2xl lg:px-7'>shop now</button>
                    </div>
                </div>
              <div className='relative w-full  h-full flex-1'>
                <img src="./images/hero-img-min.png" alt="hero-img" className='h-full w-full'/>
                <img src="./images/Coffees.png" alt="coffees" className='absolute top-0 right-0 w-3/4 h-full drop-shadow-lg'/>

            </div>
                <CardHero/>
        </div>
    );
};

export default HeroMd;