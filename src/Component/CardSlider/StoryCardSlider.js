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
        <div className='w-full px-5 my-16 max-w-7xl mx-auto md:my-32'>
            <Swiper pagination={{clickable:true}} modules={[Pagination]} className="mySwiper" style={{
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
    );
};

export default StoryCardSlider;