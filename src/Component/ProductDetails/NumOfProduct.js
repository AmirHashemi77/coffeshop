import React from 'react';

const NumOfProduct = ({number,setNumber}) => {
   

    const increaseHandler=()=>{
        setNumber((prev)=>prev+1)
    }
    const decreaseHandler=()=>{
        if(number===1) return
        setNumber((prev)=>prev-1)
    }


    return (
        <div className='flex flex-row items-center gap-3'>
            <button onClick={increaseHandler} className='flex items-center justify-center rounded-full w-10 h-10 bg-brown1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 fill-brown4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
        <input type="text" className='w-10 h-10 text-xl text-center rounded-lg bg-yellow-50' value={number} readOnly />
            <button onClick={decreaseHandler} className='flex items-center justify-center rounded-full w-10 h-10  bg-brown1 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-brown4 w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
            </button>
    </div>
    );
};

export default NumOfProduct;