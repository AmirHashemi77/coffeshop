import React from 'react';
import CommentsItem from './CommentsItem';

const CommentSection = () => {
    return (
        <div className='flex flex-col justify-between gap-5 items-center w-full max-w-5xl bg-card-slider px-5 py-20 relative'>
            <h4 className='section-title text-shadow absolute z-10 right-11 -top-6 md:text-5xl md:-top-8'>Comments</h4>
            <CommentsItem/>
            <CommentsItem/>
            <CommentsItem/>
            <CommentsItem/>
            <CommentsItem/>
        </div>
    );
};

export default CommentSection;