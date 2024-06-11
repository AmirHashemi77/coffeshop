import React from 'react';

const Error = ({message,type='box'}) => {
    return (
        <p className={`flex items-center justify-center capitalize text-brown1 pb-7 text-base md:text-xl text-center ${type==='box' ? 'md:w-2/3 lg:w-3/4 h-96' : 'w-full'}`}>{message}</p>
    );
};

export default Error;