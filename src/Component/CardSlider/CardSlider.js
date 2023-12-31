import React from 'react';

const CardSlider = () => {
    return (
        <div className='w-full px-5 my-12'>
            <div className='flex flex-col items-center justify-center gap-10 w-full max-w-6xl mx-auto'>
                <div className='flex flex-col items-center justify-between w-11/12 relative bg-card-slider md:flex-row'>
                    <img src="/images/Image-ourstory.png" alt="" className='md:w-1/2 md:absolute'/>
                    <div className='hidden w-1/2 h-full md:block'></div>
                    <div className='flex flex-col items-end w-full px-6 md:flex-1 md:py-12'>
                        <p className='text-white text-xs text-center line-clamp-4 font-leiko font-normal leading-8 md:line-clamp-6 md:text-start'>
                            Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!
                        </p>
                        <a href="#" className='text-white text-xs my-5 underline'>More</a>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default CardSlider;