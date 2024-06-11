import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({blogItemWidth,id,title,content}) => {
    const cardWidth=useRef()
    useEffect(()=>{
        if(blogItemWidth) {
            blogItemWidth(cardWidth.current.getBoundingClientRect().width);
        }
    },[blogItemWidth])


    return (
        <div ref={cardWidth} className='bg-brown3 px-12 py-5 rounded-[35px]'>
            <div className='flex flex-col items-start space-y-7'>
                <h6 className='text-2xl text-white font-leiko capitalize font-normal'>{title}</h6>
                <p className='text-[#F6E5DA] text-sm font-leiko font-normal leading-8 line-clamp-4'>
                    {content}
                </p>
                {/* <div className='flex flex-col items-center justify-between gap-4 w-full md2:flex-row md2:items-end md2:gap-0'>
                    <div className='flex flex-col item-center gap-5'>
                        <img src="/images/Frame.svg" alt="" />
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-[#FFE7CF] w-4 h-4 rounded-full'></div>
                                <p className='font-leiko capitalize text-[9px] text-black'>steamed milk</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='bg-white w-4 h-4 rounded-full'></div>
                                <p className='font-leiko capitalize text-[9px] text-black'>steamed milk</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='bg-[#533A2F] w-4 h-4 rounded-full'></div>
                                <p className='font-leiko capitalize text-[9px] text-black'>steamed milk</p>
                            </div>
                        </div>
                    </div>

                    <button className='text-xl font-leiko text-white underline'>More...</button>
                </div> */}

                {/* <div className='flex flex-col items-center justify-between gap-4 w-full md:flex-row md:items-end md:gap-0'>
                        <div className='flex items-center gap-8'>
                            <div className='flex flex-col items-center gap-3'>
                                <img src="/images/icon/Group 11.svg" alt="" />
                                <p className='text-brown1 font-leiko text-xs capitalize'>50%</p>
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <img src="/images/icon/Group 12.svg" alt="" />
                                <p className='text-brown1 font-leiko text-xs capitalize'>75%</p>
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <img src="/images/icon/Group 10.svg" alt="" />
                                <p className='text-brown1 font-leiko text-xs capitalize'>100%</p>
                            </div>
                        </div>
                        <button className='text-xl font-leiko text-white underline px-2'>More...</button>
                </div> */}
                <div className='flex flex-col items-center flex-wrap justify-between gap-4 w-full lg:flex-row lg:items-end lg:gap-0'>
                    <img src="/images/Asset 1@2x 1.png" alt="" />

                    <Link to={`/blogs/${id}`} className='text-xl font-leiko text-white underline px-2'>More...</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;