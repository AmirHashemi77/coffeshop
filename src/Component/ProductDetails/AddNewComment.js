import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { postComment } from '../../services/getProduct';
import { useParams } from 'react-router-dom';
import Error from '../Error';
import { useForm } from 'react-hook-form';
import FormError from '../ReservForm/FormError';
import Spinner from '../Spinner/Spinner';


const AddNewComment = ({productData}) => {
    const params=useParams()
    const {register,handleSubmit,formState:{errors},reset}=useForm()
    const queryClient=useQueryClient()
    const {isLoading,mutate,error,isError}=useMutation({
        mutationFn:postComment,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["productDetails"]
            })
            reset()
        }
    })


    const onSubmitHandler=(data)=>{
        const newCommentData={
            name:data?.autherName,
            commentContent:data?.comment,
            date:new Date().toLocaleDateString('en-CA')
        }
        
        mutate({productId:params?.productid,newComments:{comments:[...productData?.comments,newCommentData]}})
        
    }
    return (
        <div className='flex flex-col justify-between gap-5 items-start w-full max-w-5xl bg-card-slider px-5 py-20 relative'>
            <h4 className='section-title text-shadow absolute z-10 right-11 -top-6 md:text-5xl md:-top-8'>Add New Comment</h4>

            {
                isLoading ? <Spinner/> : 
                <>
                            {isError && <Error type='line' message={error.message}/>}
                            <form onSubmit={handleSubmit(onSubmitHandler)} className='flex flex-col items-start gap-5 w-full max-w-3xl mx-auto'>
                                <input id='autherName' type="text" placeholder='AutherName' className='px-4 py-4 rounded-2xl bg-yellow-50  placeholder:font-leiko focus:outline-none w-full' {...register('autherName',{
                                    required:'Please fill in this field',
                                    minLength:{value:6,message:'Enter at least 6 characters'}
                                })}/>
                                {errors?.autherName?.message && <FormError errMessage={errors?.autherName?.message}/>}
                                <textarea id='comment' cols="30" rows="10" placeholder='Comments...' className='px-4 py-4 rounded-2xl bg-yellow-50  placeholder:font-leiko focus:outline-none w-full' {...register("comment",{
                                    required:'Please fill in this field'
                                })}></textarea>
                                {errors?.comment?.message && <FormError errMessage={errors?.comment?.message}/>}
                                
                                <input value="Submit" type='submit' className='flex items-center justify-center rounded-2xl bg-[#22151884] w-full p-4 text-brown1 hover:bg-[#221518d6] duration-300 cursor-pointer'/>
                            </form>
                </>
            }
        </div>
    );
};

export default AddNewComment;