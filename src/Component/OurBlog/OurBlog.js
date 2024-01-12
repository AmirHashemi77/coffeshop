import React, { useCallback, useRef } from 'react';
import BlogItem from './BlogItem';

const OurBlog = () => {
    const slider=useRef()
    const blogItem=useRef()
    const blogItemWidth=useCallback((width)=>{
        blogItem.current=width
    },[])
    const nextBtn=()=>{
        slider.current.scrollLeft+=blogItem.current
    }
    return (
        <div className='w-full relative my-16 py-16 our-blog-bg'>           
            <h4 className='section-title text-shadow absolute z-10 left-1/2 -translate-x-1/2 -top-6 md:text-5xl md:-top-8'>Our Blog</h4>
            <div ref={slider} className='blogs-slider px-5'>
                <BlogItem blogItemWidth={blogItemWidth}/>
                <BlogItem blogItemWidth={blogItemWidth}/>
                <BlogItem blogItemWidth={blogItemWidth}/>
                <BlogItem blogItemWidth={blogItemWidth}/>
                
            </div>
            <button onClick={nextBtn} className='flex items-center justify-center absolute bottom-4 right-10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M15.6875 39.8281L31.4844 24.0781C31.6719 23.8906 31.8044 23.6875 31.8819 23.4688C31.9606 23.25 32 23.0156 32 22.7656C32 22.5156 31.9606 22.2812 31.8819 22.0625C31.8044 21.8438 31.6719 21.6406 31.4844 21.4531L15.6875 5.65625C15.25 5.21875 14.7031 5 14.0469 5C13.3906 5 12.8281 5.23437 12.3594 5.70312C11.8906 6.17187 11.6563 6.71875 11.6563 7.34375C11.6563 7.96875 11.8906 8.51562 12.3594 8.98437L26.1406 22.7656L12.3594 36.5469C11.9219 36.9844 11.7031 37.5231 11.7031 38.1631C11.7031 38.8044 11.9375 39.3594 12.4063 39.8281C12.875 40.2969 13.4219 40.5312 14.0469 40.5312C14.6719 40.5312 15.2188 40.2969 15.6875 39.8281Z" fill="#F8E4BE"/>
                </svg>
            </button>
        </div>
    );
};

export default OurBlog;