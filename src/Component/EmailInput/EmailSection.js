import React from 'react';

const EmailSection = () => {
    return (
        <div className='w-full my-32 bg-card-slider2 py-14 px-5 relative'>
            <div className='flex flex-col items-center gap-14'>
                <p className='text-center font-leiko text-[#F8E4BE] text-xl'>subscribe to our newsletter, discounts and promotions</p>
                <div className='flex items-center max-w-xl mx-auto bg-white rounded-[12px] pr-6 pl-3 border boreder-[#D6D6D6]'>
                    <img src="/images/icon/fluent_alert-16-regular.svg" alt="" />
                    <input type="text" className='py-3 pr-6 pl-3 placeholder:text-[#9D8781] rounded-[12px] focus:outline-none' placeholder='Your Email Address' />
                </div>
                <button className='btn bg-btn2 rounded-3xl py-3 px-9 text-[#F8E4BE] font-leiko text-2xl'>Subscribe</button>

                <div className='hidden absolute -bottom-44 right-0 rotate-180 md:block z-0 -scale-y-100'>
                <img src="/images/icon/bg-cofe.svg" alt="" />
            </div>
            </div>
        </div>
    );
};

export default EmailSection;