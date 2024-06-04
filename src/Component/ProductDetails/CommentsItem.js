import React from 'react';

const CommentsItem = () => {
    return (
        <div className='flex flex-col items-center w-full px-5 py-2 border border-white border-opacity-20 rounded-2xl max-w-3xl'>
            <div className='flex items-center justify-between w-full py-2  border-b border-white border-opacity-20 '>
                <h5 className='text-white text-base font-leiko leading-8 text-left capitalize opacity-90'>Amir Hashemi</h5>
                <span className='text-white text-sm font-leiko leading-8 text-left capitalize opacity-90'>2023/12/12</span>
            </div>
            <div className='flex items-center w-full py-2'>
                <p className='text-white text-sm text-center font-leiko leading-8 md:text-left opacity-50 hover:opacity-90 duration-300'>
                    Reliable and easy to use. Our customers love the coffee.
                    Reliable and easy to use. Our customers love the coffee.
                    Reliable and easy to use. Our customers love the coffee.
                </p>
            </div>
        </div>
    );
};

export default CommentsItem;