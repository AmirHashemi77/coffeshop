import React from 'react';

const Spinner = () => {
    return (
        
        <div className='flex flex-col items-center justify-center gap-6 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-brown2 opacity-70 h-28 w-28"></div>
            {/* <h1 data-aos="fade-up" className='font-leiko text-brown4 text-5xl font-bold text-shadow'>Coffe</h1> */}
        </div>
        
    );
};

export default Spinner;