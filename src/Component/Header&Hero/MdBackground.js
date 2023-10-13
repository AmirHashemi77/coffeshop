import React from 'react';

const MdBackground = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen absolute top-0 right-0 z-0'>
            <div className='w-1/2 h-full bg-hero'></div>
            <div className='w-1/2 h-full bg-hero2'></div>
        </div>
    );
};

export default MdBackground;