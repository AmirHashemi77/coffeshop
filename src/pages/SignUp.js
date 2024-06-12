import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import FormError from '../Component/ReservForm/FormError';
import { useMutation} from '@tanstack/react-query';
import { signUpHandler } from '../services/authHandler';
import Error from '../Component/Error';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../Component/Spinner/Spinner';







const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneNumberRegex= /(0\d{2}-?\d{7,8})|(09\d{2}-?\d{7})|(\+98-\d{2}-?\d{7,8})|(\+98-9\d{2}-?\d{7})/;



const SignUp = () => {
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors} , reset}=useForm()
    const {mutate , isError:isSignupError , isLoading , error:signupError }=useMutation({
        mutationKey:['signup'],
        mutationFn:signUpHandler,
        onSuccess:()=>{
            alert('Your account is create...')
            reset()
            navigate("/login")
        }
    })

    
    const onSignupHandler=async (data)=>{
            mutate({
                id:uuidv4(),
                username:data.name,
                email:data.email,
                phone:data.phone
            })
            
    }


    return (
        <div className='flex items-center justify-center w-full h-screen overflow-hidden relative'>
            {isLoading && <span className='absolute top-10 right-10'><Spinner/></span>}
        <div className='flex flex-col items-center w-full max-w-xl bg-card-slider px-5 pb-20 pt-28 relative'>
                <h4 className='section-title text-shadow absolute z-10 right-11 -top-6 md:text-5xl md:-top-8'>SignUp</h4>
                {isSignupError && <Error type='line' message={signupError.message}/>}
                <form onSubmit={handleSubmit(onSignupHandler)} className='flex flex-col items-start gap-14 w-full'>
                    <div className='flex flex-col items-start gap-3 w-full'>
                                    <div className='flex items-center bg-white w-full border border-gray1 rounded-xl px-3'>
                                        <img src="/images/icon/material-symbols_person-outline-rounded.svg" alt="" />
                                        <input id='name' type="text" placeholder='your name' className='form-input' {...register("name",{
                                            required:'Please fill in this field',
                                            minLength:{value:4,message:'Enter at least 4 characters'}
                                            })}/>
                                    </div>

                                    {errors?.name?.message && <FormError errMessage={errors?.name?.message}/>}
                    </div>



                    <div className='flex flex-col items-start gap-3 w-full'>
                                <div className='flex items-center bg-white w-full border border-gray1 rounded-xl px-3'>
                                    <img src="/images/icon/material-symbols_phone-iphone-outline.svg" alt="" />
                                    <input id='phone' type="text" placeholder='your phone' className='form-input' {...register("phone",{
                                        required:'Please fill in this field',
                                        pattern:{value:phoneNumberRegex,message:'Please Enter valid phone number.'}
                                        })}/>
                                </div>

                                {errors?.phone?.message && <FormError errMessage={errors?.phone?.message}/>}
                    </div>



                    <div className='flex flex-col items-start gap-3 w-full'>
                                <div className='flex items-center bg-white w-full border border-gray1 rounded-xl px-3'>
                                    <img src="/images/icon/ic_outline-email.svg" alt="" />
                                    <input id='email' type="text" placeholder='your email' className='form-input' {...register("email",{
                                        required:'Please fill in this field',
                                        pattern:{value:emailRegex,message:'Invalid email address.'}
                                        })}/>
                                </div>
                                {errors?.email?.message && <FormError errMessage={errors?.email?.message}/>}
                    </div>


                    <input type='submit' value='SignUp' className='flex items-center justify-center rounded-2xl bg-[#22151884] w-full px-3 py-4 text-xl capitalize text-brown1 hover:bg-[#221518d6] duration-300 cursor-pointer'/>
                </form>

                <Link className='absolute top-5 left-7' to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-brown1 w-7 h-7">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>

                </Link>
                
        </div>
</div>
    );
};

export default SignUp;