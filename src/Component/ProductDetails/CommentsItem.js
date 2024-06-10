import React from 'react';

const CommentsItem = ({auther,date,content,id}) => {
    return (
        <div className='flex flex-col items-center w-full px-5 py-2 border border-white border-opacity-20 rounded-2xl max-w-3xl'>
            <div className='flex items-center justify-between w-full py-2  border-b border-white border-opacity-20 '>
                <h5 className='text-white text-base font-leiko leading-8 text-left capitalize opacity-90'>{auther}</h5>
                <span className='text-white text-sm font-leiko leading-8 text-left capitalize opacity-90'>{date}</span>
            </div>
            <div className='flex items-center w-full py-2'>
                <p className='text-white text-sm text-center font-leiko leading-8 md:text-left opacity-50 hover:opacity-90 duration-300'>
                   {content}
                </p>
            </div>
        </div>
    );
};

export default CommentsItem;