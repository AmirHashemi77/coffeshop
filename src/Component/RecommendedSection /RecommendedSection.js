import React from 'react';
import SliderCard from './SliderCard';

const RecommendedSection = () => {
    return (
        <div className='w-full my-16'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col items-center gap-16'>
                    <h4 className='section-title  font-dancingScript font-bold capitalize md:text-6xl'>Recommended</h4>
                    <div className='product-slider'>
                        <SliderCard/>
                        <SliderCard/>
                        <SliderCard/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RecommendedSection;