import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { postComment } from '../../services/getProduct';
import { useParams } from 'react-router-dom';
import Error from '../Error';

const AddNewComment = () => {
    const params=useParams()
    const queryClient=useQueryClient()
    const commentData={}
    const {isLoading,mutate,error,isError}=useMutation({
        mutationFn:()=>postComment(params?.productid,commentData),
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["productDetails"]
            })
        }
    })


    return (
        <div className='flex flex-col justify-between gap-5 items-start w-full max-w-5xl bg-card-slider px-5 py-20 relative'>
            <h4 className='section-title text-shadow absolute z-10 right-11 -top-6 md:text-5xl md:-top-8'>Add New Comment</h4>
            <Error type='line' message='some thing is wrong'/>
            <form className='flex flex-col items-start gap-5 w-full max-w-3xl mx-auto'>
                <input type="text" placeholder='AutherName' className='px-4 py-4 rounded-2xl bg-yellow-50  placeholder:font-leiko focus:outline-none w-full'/>
                <textarea cols="30" rows="10" placeholder='Comments...' className='px-4 py-4 rounded-2xl bg-yellow-50  placeholder:font-leiko focus:outline-none w-full'></textarea>
                <button className='flex items-center justify-center rounded-2xl bg-[#22151884] w-full p-4 text-brown1 hover:bg-[#221518d6] duration-300'>Submit</button>
            </form>
        </div>
    );
};

export default AddNewComment;