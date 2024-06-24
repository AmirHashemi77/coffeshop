import React from 'react';

const Spinner = ({width = "w-28",height="h-28"}) => {
    return (
        
        <div className='flex flex-col items-center justify-center gap-6 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
            <div className={`loader ease-linear rounded-full border-8 border-t-8 border-brown2 opacity-70 ${width} ${height}`}></div>
        </div>
        
    );
};

export default Spinner;