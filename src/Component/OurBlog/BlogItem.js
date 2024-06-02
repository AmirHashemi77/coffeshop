import React, { useEffect, useRef } from 'react';

const BlogItem = ({blogItemWidth}) => {
    const cardWidth=useRef()
    useEffect(()=>{
        if(blogItemWidth) {
            blogItemWidth(cardWidth.current.getBoundingClientRect().width);
        }
    },[blogItemWidth])


    return (
        <div ref={cardWidth} className='bg-brown3 px-12 py-5 rounded-[35px]'>
            <div className='flex flex-col items-start space-y-7'>
                <h6 className='text-2xl text-white font-leiko capitalize font-normal'>how to make a great coffee</h6>
                <p className='text-[#F6E5DA] text-sm font-leiko font-normal leading-8 line-clamp-4'>
                    Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press, mug or other vessel. Next, measure out 2 tablespoons of ground coffee per 8 ounces of water. If you're using a French press, pour the measured grounds into the bottom of the press followed by hot water (between 195-205 degrees Fahrenheit). Let sit for three minutes before gently pushing down on the filter to trap the grounds at the bottom; this will create an intense flavor with slightly heavier body than filtered methods. If you have neither a French press nor filter, just pour your measured grounds directly into a mug or vessel and top with piping hot water. Give it a stir and let it sit for 3-4 minutes before consuming--but don't leave it too long as this method won't produce quite as bold of a flavor as either filtering or pressing would!
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

                    <button className='text-xl font-leiko text-white underline px-2'>More...</button>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;