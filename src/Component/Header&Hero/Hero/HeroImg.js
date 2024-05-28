import React from 'react';

const HeroImg = () => {
    return (
        <div className='relative w-full h-full flex-1'>
            <img src="./images/hero-img-min.png" alt="hero-img" className='h-full w-full'/>
            <img src="./images/Coffees.png" alt="coffees" className='absolute top-0 right-0 w-3/4 h-full drop-shadow-lg'/>
        </div>
    );
};

export default HeroImg;