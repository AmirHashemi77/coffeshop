import React from 'react';

const ReviewItem = ({auther,comment,id,activeIndex,img}) => {
    return (
        <div className={`flex flex-col items-center gap-6 card-border-left customer-card ${activeIndex===id ? 'active' : 'translate-y-56 md:translate-y-52'} duration-300`}>
            <img src={img} alt=""  className='w-[121px] h-[121px] object-contain rounded-full'/>
            <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-base'>{auther}</p>
            <div className='flex items-center gap-1'>
                <img src="./images/icon/material-symbols_star-half-rounded.svg" alt="" />
                <img src="./images/icon/material-symbols_star-half-rounded.svg" alt="" />
                <img src="./images/icon/material-symbols_star-half-rounded.svg" alt="" />
                <img src="./images/icon/material-symbols_star-half-rounded.svg" alt="" />
                <img src="./images/icon/material-symbols_star-half-rounded.svg" alt="" />
            </div>
            <p className='capitalize max-w-xs text-cream4 text-center font-leiko text-xs py-4'>{comment}</p>
        </div>
    );
};

export default ReviewItem;