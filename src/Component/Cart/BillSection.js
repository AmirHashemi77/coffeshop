import React from 'react';

const BillSection = () => {
    return (
   
    <>
        <div className='flex flex-col items-start gap-5 w-full max-w-4xl border-b border-white border-opacity-20 p-5'>
            <div className='flex items-center gap-3'>
                <p className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>TotalPrice : </p>
                <p className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>100$</p>
            </div>
            <div className='flex items-center gap-3'>
                <p className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>tax : </p>
                <p className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>10$</p>
            </div>
            <div className='flex items-center gap-3'>
                <p className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>packing : </p>
                <p className='text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90'>5$</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-5 w-full max-w-4xl p-5'>
            <div className='flex items-center gap-3'>
                    <p className='text-white text-2xl font-leiko leading-8 text-center lg:text-3xl capitalize'>Payable : </p>
                    <p className='text-white text-2xl font-leiko leading-8 text-center lg:text-3xl capitalize'>115$</p>
            </div>
            <button className='flex items-center justify-center rounded-2xl bg-[#22151884] w-full p-4 text-brown1 hover:bg-[#221518d6] duration-300'>Submit</button>
        </div>
        </>
    
    );
};

export default BillSection;