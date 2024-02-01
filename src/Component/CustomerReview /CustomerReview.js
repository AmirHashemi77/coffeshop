import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ReviewItem from './ReviewItem';



const customerReviewArr=[
    {
        id:1,
        auther:'Tyler Student',
        comment:'I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.',
        img:'/images/profile/kelly-searle-209751-scaled 1.png'
    },
    {
        id:2,
        auther:'Ali',
        comment:'I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.',
        img:'/images/profile/pexels-photo-26939-1-1024x1024 1.png'
    },
    {
        id:3,
        auther:'Reza',
        comment:'I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.',
        img:'/images/profile/bewakoof-com-official-208957 1.png'
    },
    {
        id:4,
        auther:'Karim',
        comment:'I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.',
        img:'/images/profile/kelly-searle-209751-scaled 1.png'
    },
    {
        id:5,
        auther:'Sara',
        comment:'I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.',
        img:'/images/profile/pexels-photo-26939-1-1024x1024 1.png'
    },
    {
        id:6,
        auther:'Elham',
        comment:'I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.',
        img:'/images/profile/bewakoof-com-official-208957 1.png'
    },
]




const CustomerReview = () => {
    const slider=useRef()
    const prevBtnEl=useRef()
    const nextBtnEl=useRef()
    const [slideWidth,setSlideWidth]=useState()
    const [customerReviews,setCustomerReviews]=useState(customerReviewArr)
    const [activeCardIndex,setActiveCardIndex]=useState(Math.round(customerReviews.length / 2))
    const [addCardAfterNum,setAddCardAfterNum]=useState(0)
   



    useEffect(()=>{
            
            slider.current.children[Math.round(customerReviews.length / 2) - 1].scrollIntoView({inline: 'center',block:'end'})
            window.scrollTo(0,0)
            setSlideWidth(slider.current.children[0].getBoundingClientRect().width + 19) 
      // eslint-disable-next-line
    },[])



    const nextBtn=(e)=>{
        nextBtnEl.current.disabled=true
        slider.current.classList.remove('overflow-x-hidden')
        setActiveCardIndex((prev)=>prev+1)
        slider.current.scrollBy(slideWidth,0)

        setCustomerReviews((prev)=>{
            return [...prev,prev[addCardAfterNum]];
        })
        slider.current.classList.add('overflow-x-hidden')

        setAddCardAfterNum((prev)=>prev+1)
        setTimeout(()=>{
            nextBtnEl.current.disabled=false
        },400)
    }


    const prevBtn=()=>{
        prevBtnEl.current.disabled=true
        if(activeCardIndex<=3){
            
            return;
        }
        slider.current.classList.remove('overflow-x-hidden')
        setActiveCardIndex((prev)=>prev-1)
        slider.current.scrollBy(-slideWidth,0)
        slider.current.classList.add('overflow-x-hidden')
     
        setTimeout(()=>{
            prevBtnEl.current.disabled=false
        },400)

    }

    




    return (
        <div className='w-full my-16 relative md:my-44 md:py-16'>
                        {/* slider */}
            <div className='max-w-6xl mx-auto relative bg-customer-review'>
                <h4 className='section-title font-dancingScript font-bold capitalize absolute left-1/2 -top-10 -translate-x-1/2 md:text-6xl'>Customer Review</h4>
                <div ref={slider} className='customer-slider pt-40 relative bottom-0 overflow-y-hidden overflow-x-hidden'>
                  {customerReviews.map((item,index)=>(
                    <ReviewItem id={index+1} auther={item.auther} comment={item.comment} img={item.img} activeIndex={activeCardIndex}/>
                  ))}
                </div>
                    {/* buttons */}
                <button ref={prevBtnEl} onClick={(e)=>prevBtn(e)} className='absolute top-1/2 left-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <path d="M17.1094 39.5625L1.3125 23.8125C1.125 23.625 0.9925 23.4219 0.915 23.2031C0.83625 22.9844 0.796875 22.75 0.796875 22.5C0.796875 22.25 0.83625 22.0156 0.915 21.7969C0.9925 21.5781 1.125 21.375 1.3125 21.1875L17.1094 5.39062C17.5469 4.95312 18.0937 4.73438 18.75 4.73438C19.4062 4.73438 19.9687 4.96875 20.4375 5.4375C20.9062 5.90625 21.1406 6.45312 21.1406 7.07812C21.1406 7.70312 20.9062 8.25 20.4375 8.71875L6.65625 22.5L20.4375 36.2812C20.875 36.7188 21.0937 37.2575 21.0937 37.8975C21.0937 38.5387 20.8594 39.0938 20.3906 39.5625C19.9219 40.0312 19.375 40.2656 18.75 40.2656C18.125 40.2656 17.5781 40.0312 17.1094 39.5625Z" fill="#F8E4BE"/>
                    </svg>
                </button>
                <button ref={nextBtnEl} onClick={(e)=>nextBtn(e)} className='absolute top-1/2 right-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <path d="M27.8906 39.5625L43.6875 23.8125C43.875 23.625 44.0075 23.4219 44.085 23.2031C44.1638 22.9844 44.2031 22.75 44.2031 22.5C44.2031 22.25 44.1638 22.0156 44.085 21.7969C44.0075 21.5781 43.875 21.375 43.6875 21.1875L27.8906 5.39062C27.4531 4.95312 26.9063 4.73438 26.25 4.73438C25.5938 4.73438 25.0313 4.96875 24.5625 5.4375C24.0938 5.90625 23.8594 6.45312 23.8594 7.07812C23.8594 7.70312 24.0938 8.25 24.5625 8.71875L38.3438 22.5L24.5625 36.2812C24.125 36.7188 23.9063 37.2575 23.9063 37.8975C23.9063 38.5387 24.1406 39.0938 24.6094 39.5625C25.0781 40.0312 25.625 40.2656 26.25 40.2656C26.875 40.2656 27.4219 40.0312 27.8906 39.5625Z" fill="#F8E4BE"/>
                    </svg>
                </button>
            </div>
                       
            <div className='hidden absolute -top-24 left-0 rotate-180 xl:block z-0 -scale-x-100'>
                <img src="/images/icon/bg-cofe2.svg" alt="" />
            </div>
            <div className='hidden absolute -top-40 left-40 rotate-180 md:block z-0 -scale-y-100'>
                <img src="/images/icon/bg-cofe3.svg" alt="" />
            </div>
        </div>
    );
};

export default CustomerReview;