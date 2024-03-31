import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full mt-56 bg-footer relative py-3 '>
            <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col items-center justify-between md:flex-row'>
                        <div className='flex items-center justify-center img-footer scale-90 xl:scale-100'>
                            <img src="./images/Footer Img.png" alt="" className='md:-translate-y-16'/>
                        </div>
                        <div className='flex items-center justify-between flex-1 flex-wrap gap-y-10'>
                                <ul className='flex flex-col items-start gap-7 py-5 px-7'>
                                <li className='capitalize text-cream1 font-leiko text-xl font-bold'>About</li>
                                <li><a className='capitalize text-cream1 font-leiko text-base' href="/">our story</a></li>
                                <li><a className='capitalize text-cream1 font-leiko text-base' href="/">FAQ</a></li>
                                <li><a className='capitalize text-cream1 font-leiko text-base' href="/">careers</a></li>
                                </ul>
                                <ul className='flex flex-col items-start gap-7 py-5 px-7'>
                                <li className='capitalize text-cream1 font-leiko text-xl font-bold'>customer recourses </li>
                                <li><a className='capitalize text-cream1 font-leiko text-base' href="/">menu</a></li>
                                <li><a className='capitalize text-cream1 font-leiko text-base' href="/">support</a></li>
                                <li><a className='capitalize text-cream1 font-leiko text-base' href="/">locations</a></li>
                                </ul>
                                <ul className='flex flex-col items-start gap-7 py-5 px-7'>
                                <li className='capitalize text-cream1 font-leiko text-xl font-bold'>Services</li>
                                <li><a className='capitalize text-cream1 font-leiko text-base' href="/">payment options</a></li>
                                <li><a className='capitalize text-cream1 font-leiko text-base' href="/">refunds & exchanges </a></li>
                                <li><a className='capitalize text-cream1 font-leiko text-base' href="/">limitation of liability </a></li>
                                </ul>
                                <ul className='flex flex-col items-start gap-7 py-5 px-7'>
                                
                                    <li className='flex items-center gap-2 py-[10px] px-2'>
                                        <img src="./images/icon/material-symbols_location-on-rounded.svg" alt="" />
                                        <span className='capitalize text-cream1 font-leiko text-base'>12 jhon Avenue #35 - new York </span>
                                    </li>
                                    <li className='flex items-center gap-2 py-[10px] px-2'>
                                        <img src="./images/icon/ic_round-email.svg" alt="" />
                                        <span className='capitalize text-cream1 font-leiko text-base'>elizacoffee@coffee.com</span>
                                    </li>
                                    <li className='flex items-center gap-2 py-[10px] px-2'>
                                        <img src="./images/icon/ic_outline-phone-android.svg" alt="" />
                                        <span className='capitalize text-cream1 font-leiko text-base'>+1-222-34-eliza</span>
                                    </li>
                                
                                
                                </ul>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-2 mx-auto mt-5 xl:absolute xl:bottom-3 xl:left-1/2 xl:-translate-x-1/2'>
                        <p className='capitalize font-leiko text-sm text-center text-cream1 ]'>Created By Elinaui9 </p>
                        <p className='capitalize font-leiko text-sm text-center text-cream1 ]'>Copyright 2023 Eliza Coffee . All rights reserved.</p>
                    </div>
                
            </div>

            <div className='absolute -top-8 right-4'>
                <div className='flex items-center gap-3'>
                    <span className='capitalize text-cream1 text-base font-leiko'>social media: </span>
                    <a href="/"><img src="./images/icon/linkedin-icon.svg" alt="" /></a>
                    <a href="/"><img src="./images/icon/pintrest-icon.svg" alt="" /></a>
                    <a href="/"><img src="./images/icon/instagram-icon.svg" alt="" /></a>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;