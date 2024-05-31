import React from 'react';

const SideBarContainer = ({children,title}) => {
    return (
        <div className='flex flex-col items-start gap-6 w-full bg-card-slider2 p-5 col-start-1 col-end-2 h-fit'>
            <h4 className='text-left section-title border-brown1 border-b border-opacity-5 w-full py-4 px-2' >{title}</h4>
            {children}
        </div>
    );
};

export default SideBarContainer;