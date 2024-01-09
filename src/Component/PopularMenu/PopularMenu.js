import React from 'react';

const PopularMenu = () => {
    return (
        <div className='w-full my-16 relative md:my-32'>
            <div className='w-full max-w-7xl mx-auto px-5'>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h5 className='section-title font-dancingScript font-bold capitalize md:text-6xl'>popular menu</h5>
                    <div className='flex items-center justify-center bg-menu w-full py-5'>
                        {/* left menu */}
                        <div className='flex flex-col item-start gap-[6.8vw] 2xl:gap-24'>
                            <div className='menu-item !flex-row-reverse translate-x-[5vw] 2xl:translate-x-[76.8px]'>
                                <span className='text-[#F8E4BE] font-dancingScript text-[3.33vw] font-semibold capitalize whitespace-nowrap'>chocolate</span>
                                <span className='text-[#F8E4BE] font-dancingScript text-[1.66vw] font-semibold'>$40.00</span>
                            </div>
                            <div className='menu-item !flex-row-reverse'>
                                <span className='text-[#F8E4BE] font-dancingScript text-[3.33vw] font-semibold capitalize whitespace-nowrap'>double es</span>
                                <span className='text-[#F8E4BE] font-dancingScript text-[1.66vw] font-semibold'>$25.00</span>
                            </div>
                            <div className='menu-item !flex-row-reverse translate-x-[1.527vw] 2xl:translate-x-[23.4547px]'>
                                <span className='text-[#F8E4BE] font-dancingScript text-[3.33vw] font-semibold capitalize whitespace-nowrap'>caramel</span>
                                <span className='text-[#F8E4BE] font-dancingScript text-[1.66vw] font-semibold'>$45.00</span>
                            </div>
                            <div className='menu-item !flex-row-reverse translate-x-[5vw] 2xl:translate-x-[76.8px]'>
                                <span className='text-[#F8E4BE] font-dancingScript text-[3.33vw] font-semibold capitalize whitespace-nowrap'>doppio</span>
                                <span className='text-[#F8E4BE] font-dancingScript text-[1.66vw] font-semibold'>$50.00</span>
                            </div>
                        </div>
                        {/* menu img */}
                        <img src="/images/Popularmenu Img.png" alt="" className='w-[39vw] object-contain object-center -translate-y-[5vw] 2xl:-translate-y-[76.8px]'/>
                        {/* right menu */}
                        <div className='flex flex-col item-start gap-[6.8vw] 2xl:gap-24'>
                            <div className='menu-item right-menu -translate-x-[5vw] 2xl:-translate-x-[76.8px]'>
                                <span className='text-[#F8E4BE] font-dancingScript text-[3.33vw] font-semibold capitalize whitespace-nowrap'>espersso</span>
                                <span className='text-[#F8E4BE] font-dancingScript text-[1.66vw] font-semibold'>$30.00</span>
                            </div>
                            <div className='menu-item right-menu'>
                                <span className='text-[#F8E4BE] font-dancingScript text-[3.33vw] font-semibold capitalize whitespace-nowrap'>cappuccino</span>
                                <span className='text-[#F8E4BE] font-dancingScript text-[1.66vw] font-semibold'>$30.00</span>
                            </div>
                            <div className='menu-item right-menu -translate-x-[1.527vw] 2xl:-translate-x-[23.4547px]'>
                                <span className='text-[#F8E4BE] font-dancingScript text-[3.33vw] font-semibold capitalize whitespace-nowrap'>mocha</span>
                                <span className='text-[#F8E4BE] font-dancingScript text-[1.66vw] font-semibold'>$25.00</span>
                            </div>
                            <div className='menu-item right-menu -translate-x-[5vw] 2xl:-translate-x-[76.8px]'>
                                <span className='text-[#F8E4BE] font-dancingScript text-[3.33vw] font-semibold capitalize whitespace-nowrap'>latte</span>
                                <span className='text-[#F8E4BE] font-dancingScript text-[1.66vw] font-semibold'>$25.00</span>
                            </div>
                        </div>
                    </div>
                    <button className='flex items-baseline justify-center gap-2 self-end mr-10'>
                        <span className='capitalize text-[#F8E4BE] text-[3.6vw] font-leiko lg:text-4xl'>our menu</span>
                        <img src="/images/icon/mdi_arrow-bottom-right-bold-box-outline.svg" alt="" className='w-[3.6vw] h-[3.5vw] lg:w-6 lg:h-6'/>
                    </button>
                </div>
            </div>
            <div className='hidden absolute bottom-0 right-0 rotate-180 md:block z-0'>
                <img src="/images/icon/bg-cofe2.svg" alt="" />
            </div>
            <div className='hidden absolute bottom-64 right-20 rotate-180 lg:block z-0'>
                <img src="/images/icon/bg-cofe3.svg" alt="" />
            </div>
            <div className='hidden absolute top-64 left-0 rotate-180 md:block z-0 -scale-x-100'>
                <img src="/images/icon/bg-cofe2.svg" alt="" />
            </div>
            <div className='hidden absolute top-0 left-20 rotate-180 md:block z-0 -scale-y-100'>
                <img src="/images/icon/bg-cofe3.svg" alt="" />
            </div>
        </div>
    );
};

export default PopularMenu;