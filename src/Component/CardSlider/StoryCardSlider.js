import React from 'react';
import React, { useRef, useState } from 'react';
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
       <StoryCard/>
    );
};

export default StoryCardSlider;