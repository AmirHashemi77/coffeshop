import React from 'react';

const ReservForm = () => {
    return (
        <div className='w-full relative bg-card-slider2 !rounded-none my-16 md:my-56 '>
            <div className='w-full max-w-7xl mx-auto p-7'>
                <h4 className='section-title text-shadow absolute z-10 left-1/2 -translate-x-1/2 -top-6 md:text-5xl md:-top-8'>Reserve a Table</h4>
                <div className='flex flex-col items-center justify-between w-full md:flex-row md:pt-5 over'>
                    <img src="/images/Reserve Img.png" alt=""  className='w-full md:w-1/3' data-aos="fade-up"/>
                    <form className='flex flex-col items-center md:grid md:grid-cols-12 gap-x-9 gap-y-8 w-full px-5 mt-10 md:w-2/3'>
                            <div className='flex items-center col-start-1 col-end-13 bg-white w-full border border-gray1 rounded-xl px-3'>
                                <img src="/images/icon/material-symbols_calendar-today-outline-rounded.svg" alt="" />
                                <input type="text" placeholder='Date' className='form-input'/>
                            </div>
                            <div className='flex items-center  bg-white w-full border border-gray1 rounded-xl px-3 md2:col-start-1 md2:col-end-7'>
                                <img src="/images/icon/ic_round-access-time.svg" alt="" />
                                <input type="text" placeholder='Time' className='form-input'/>
                            </div>
                            <div className='flex items-center  bg-white w-full border border-gray1 rounded-xl px-3 md2:col-start-7 md:col-end-13'>
                                <img src="/images/icon/material-symbols_supervisor-account-outline.svg" alt="" />
                                <input type="text" placeholder='Guest' className='form-input'/>
                            </div>
                            <div className='flex items-center col-start-1 col-end-13 bg-white w-full border border-gray1 rounded-xl px-3'>
                                <img src="/images/icon/material-symbols_person-outline-rounded.svg" alt="" />
                                <input type="text" placeholder='your name' className='form-input'/>
                            </div>
                            <div className='flex items-center col-start-1 col-end-13 bg-white w-full border border-gray1 rounded-xl px-3'>
                                <img src="/images/icon/material-symbols_phone-iphone-outline.svg" alt="" />
                                <input type="text" placeholder='your phone' className='form-input'/>
                            </div>
                            <div className='flex items-center  bg-white w-full border border-gray1 rounded-xl px-3 md2:col-start-1 md2:col-end-8'>
                                <img src="/images/icon/ic_outline-email.svg" alt="" />
                                <input type="text" placeholder='your email' className='form-input'/>
                            </div>
                            <button className='btn rounded-xl py-2 w-full text-brown1 font-leiko capitalize bg-btn lg:text-xl lg:px-7 md:w-auto md2:col-start-8 md2:col-end-13'>Reserve</button>
                    </form>

                </div>
            </div>
            <div className='hidden absolute -bottom-0 -right-0 rotate-180 md:block z-0'>
                <img src="/images/icon/bg-cofe2.svg" alt="" />
            </div>
        </div>
    );
};

export default ReservForm;