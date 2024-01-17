import React from 'react';

const ServicesItem = ({imgurl,title}) => {
    return (
        <div className='flex flex-col items-center gap-5 p-10 bg-[#54372B] rounded-[35px]'>
            <img src={imgurl} alt="" />
            <p className='text-sm text-brown1 capitalize text-center'>{title}</p>
        </div>
    );
};

export default ServicesItem;