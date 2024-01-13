import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import StoryCard from './StoryCard';


const StoryCardSlider = () => {
    return (
        <div className='w-full my-16 relative md:my-32'>
            <div className='max-w-7xl mx-auto px-7'>
                <Swiper spaceBetween={30} pagination={{clickable:true}} modules={[Pagination]}  className="mySwiper" style={{
                "--swiper-pagination-color": "#D7B0A0",
                "--swiper-pagination-bullet-inactive-color": "#744F40",
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
                "--swiper-pagination-bullet-vertical-gap": "0px"
                }}>
                    <SwiperSlide>
                        <StoryCard/>                      
                    </SwiperSlide>
                    <SwiperSlide>
                        <StoryCard/>                      
                    </SwiperSlide>
                    <SwiperSlide>
                        <StoryCard/>                      
                    </SwiperSlide>
                    
                </Swiper>
            </div>
            <div className='hidden absolute -bottom-5 left-0 md:block'>
                <img src="/images/icon/bg-cofe.svg" alt="" />
            </div>
        </div>
    );
};

export default StoryCardSlider;