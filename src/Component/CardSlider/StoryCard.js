import React from 'react';

const StoryCard = () => {
    return (
        
            
                <div className='flex flex-col items-center justify-between w-11/12 our-story-border px-5 my-12 mx-auto pt-7 relative bg-card-slider md:flex-row md:pt-0'>
                    <h4 className='section-title absolute z-10 right-11 -top-6 md:text-5xl md:-top-8'>Our Story</h4>
                    <img src="/images/Image-ourstory.png" alt="" className='md:max-h-96 md:absolute md:-top-16'/>
                    <div className='hidden w-1/2 h-full md:block lg:w-1/3'></div>
                    <div className='flex flex-col items-end w-full px-6 md:flex-1 md:pt-12'>
                        <p className='text-white text-xs text-center line-clamp-4 font-leiko font-normal leading-8 md:line-clamp-6 md:text-start md:text-sm md:leading-8'>
                            Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!
                        </p>
                        <a href="#" className='text-white text-xs my-5 underline font-bold md:text-sm'>More</a>
                    </div>
                   
                </div>
            
        
    );
};

export default StoryCard;