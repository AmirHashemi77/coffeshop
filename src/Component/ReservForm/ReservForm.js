import React from 'react';
import { useForm } from 'react-hook-form';
import FormError from './FormError';




const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
const clockRegex = /\b([01][0-9]|2[0-3]):[0-5][0-9]\b/;
const phoneNumberRegex= /(0\d{2}-?\d{7,8})|(09\d{2}-?\d{7})|(\+98-\d{2}-?\d{7,8})|(\+98-9\d{2}-?\d{7})/;



const ReservForm = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()

    const onSubmitHandler=(data,)=>{
        console.log(data);
        
    }
    console.log(errors);

    return (
        <div className='w-full relative bg-card-slider2 !rounded-none my-16 md:my-56 '>
            <div className='w-full max-w-7xl mx-auto p-7'>
                <h4 className='section-title text-shadow absolute z-10 left-1/2 -translate-x-1/2 -top-6 md:text-5xl md:-top-8'>Reserve a Table</h4>
                <div className='flex flex-col items-center justify-between w-full md:flex-row md:pt-5 over'>
                    <img src="/images/Reserve Img.png" alt=""  className='w-full md:w-1/3' data-aos="fade-up"/>
                    <form onSubmit={handleSubmit(onSubmitHandler)} className='flex flex-col items-center md:grid md:grid-cols-12 gap-x-9 gap-y-8 w-full px-5 mt-10 md:w-2/3'>
                            <div className='flex flex-col items-start gap-3 col-start-1 col-end-13'>
                                <div className='flex items-center bg-white w-full border border-gray1 rounded-xl px-3'>
                                    <img src="/images/icon/material-symbols_calendar-today-outline-rounded.svg" alt="" />
                                    <input id='date' type="text" placeholder='Date' className='form-input' {...register("date",{
                                        required:'Please fill in this field',
                                        pattern:{value:dateRegex,message:'Invalid date.'}
                                        })}/>
                                </div>    
                                {errors?.date?.message && <FormError errMessage={errors?.date?.message}/>}
                            </div>
                            
                         
                            <div className='flex flex-col items-start gap-3 md2:col-start-1 md2:col-end-7'>
                                <div className='flex items-center bg-white w-full border border-gray1 rounded-xl px-3'>
                                    <img src="/images/icon/ic_round-access-time.svg" alt="" />
                                    <input id='clock' type="text" placeholder='Time' className='form-input' {...register("clock",{
                                        required:'Please fill in this field',
                                        pattern:{value:clockRegex,message:'Invalid clock .'}
                                        })}/>
                                </div>
                                {errors?.clock?.message && <FormError errMessage={errors?.clock?.message}/>}
                            </div>


                            
                        
                            <div className='flex flex-col items-start gap-3 md2:col-start-7 md:col-end-13'>
                                <div className='flex items-center bg-white w-full border border-gray1 rounded-xl px-3'>
                                    <img src="/images/icon/material-symbols_supervisor-account-outline.svg" alt="" />
                                    <input id='guest' type="number" placeholder='Guest' className='form-input' {...register("guest",{
                                        required:'Please fill in this field',
                                        min:{value:0,message:'Please enter a number between 0 and 5'},
                                        max:{value:5, message:'Please enter a number between 0 and 5'}
                                        })}/>
                                </div>
                                {errors?.guest?.message && <FormError errMessage={errors?.guest?.message}/>}
                            </div>




                             <div className='flex flex-col items-start gap-3 col-start-1 col-end-13'>
                                <div className='flex items-center bg-white w-full border border-gray1 rounded-xl px-3'>
                                    <img src="/images/icon/material-symbols_person-outline-rounded.svg" alt="" />
                                    <input id='name' type="text" placeholder='your name' className='form-input' {...register("name",{
                                        required:'Please fill in this field',
                                        minLength:{value:4,message:'Enter at least 4 characters'}
                                        })}/>
                                </div>

                                {errors?.name?.message && <FormError errMessage={errors?.name?.message}/>}
                            </div>




                            <div className='flex flex-col items-start gap-3 col-start-1 col-end-13'>
                                <div className='flex items-center bg-white w-full border border-gray1 rounded-xl px-3'>
                                    <img src="/images/icon/material-symbols_phone-iphone-outline.svg" alt="" />
                                    <input id='phone' type="text" placeholder='your phone' className='form-input' {...register("phone",{
                                        required:'Please fill in this field',
                                        pattern:{value:phoneNumberRegex,message:'Please Enter valid phone number.'}
                                        })}/>
                                </div>

                                {errors?.phone?.message && <FormError errMessage={errors?.phone?.message}/>}
                            </div>



                            <div className='flex flex-col items-start gap-3 md2:col-start-1 md2:col-end-8'>
                                <div className='flex items-center bg-white w-full border border-gray1 rounded-xl px-3'>
                                    <img src="/images/icon/ic_outline-email.svg" alt="" />
                                    <input id='email' type="text" placeholder='your email' className='form-input' {...register("email",{
                                        required:'Please fill in this field',
                                        pattern:{value:emailRegex,message:'Invalid email address.'}
                                        })}/>
                                </div>
                                {errors?.email?.message && <FormError errMessage={errors?.email?.message}/>}
                            </div>
                            <input type='submit' className='btn rounded-xl py-2 w-full text-brown1 font-leiko capitalize bg-btn lg:text-xl lg:px-7 md:w-auto md2:col-start-8 md2:col-end-13'/>
                    </form>

                </div>
            </div>
            <div className='hidden absolute -bottom-0 -right-0 rotate-180 md:block z-0'>
                <img src="/images/icon/bg-cofe2.svg" alt="" />
            </div>
        </div>
    );
};

export default ReservForm;