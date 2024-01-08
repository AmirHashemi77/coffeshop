import React, { useRef, useState } from 'react';
import SliderCard from './SliderCard';


const products=[
    {
        title:'arabica',
        subTitle:'dark roast',
        img:'/images/product/1b18a0fb617b2a74ca210364083c4782.png'
    },
    {
        title:'house blend',
        subTitle:'dark roast',
        img:'/images/product/a1e02c7516fafdf48a9f1e33639aea78.png'
    },
    {
        title:'Robusta',
        subTitle:'dark roast',
        img:'/images/product/ff10151a8fba4a58a1cc43c532721079.png'
    },
    {
        title:'house blend',
        subTitle:'dark roast',
        img:'/images/product/a1e02c7516fafdf48a9f1e33639aea78.png'
    },
    {
        title:'arabica',
        subTitle:'dark roast',
        img:'/images/product/1b18a0fb617b2a74ca210364083c4782.png'
    },
    
]

const RecommendedSection = () => {

    const sliderEl=useRef()
    const card=useRef()

    const cardWidth=(width)=>{
        card.current=width
    }

    const next=(e)=>{
        // const sliderWidth=sliderEl.current.getBoundingClientRect().width
        sliderEl.current.scrollLeft+=card.current + 36
       
    }
    const prev=(e)=>{
        // const sliderWidth=sliderEl.current.getBoundingClientRect().width
        sliderEl.current.scrollLeft-=card.current + 36
    }

    return (
        <div className='w-full my-16'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col items-center gap-16'>
                    <h4 className='section-title  font-dancingScript font-bold capitalize md:text-6xl'>Recommended</h4>
                    <div ref={sliderEl} className='product-slider'>
                        {
                            products.map((item)=>(
                                <SliderCard imgurl={item.img} title={item.title} subTitle={item.subTitle} cardWidth={cardWidth}/>
                            ))
                        }
                    </div>
                    <div className='flex items-center justify-center'>
                        <button onClick={prev} className='flex items-center justify-center w-11 h-11 relative rotate-180'>
                        <div className='w-full h-full absolute inset-0 bg-[#8D685E] opacity-0 z-10 rounded-full hover:opacity-30 duration-300'></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                <path d="M23.8125 28.6875L28.6875 23.8125C29.0625 23.4375 29.25 23 29.25 22.5C29.25 22 29.0625 21.5625 28.6875 21.1875L23.7656 16.2656C23.4219 15.9219 22.9925 15.7575 22.4775 15.7725C21.9613 15.7887 21.5312 15.9688 21.1875 16.3125C20.8438 16.6562 20.6719 17.0937 20.6719 17.625C20.6719 18.1562 20.8438 18.5938 21.1875 18.9375L22.875 20.625H16.8281C16.2969 20.625 15.8594 20.8044 15.5156 21.1631C15.1719 21.5231 15 21.9688 15 22.5C15 23.0312 15.18 23.4762 15.54 23.835C15.8988 24.195 16.3438 24.375 16.875 24.375H22.875L21.1406 26.1094C20.7969 26.4531 20.6325 26.8831 20.6475 27.3994C20.6637 27.9144 20.8438 28.3438 21.1875 28.6875C21.5312 29.0312 21.9688 29.2031 22.5 29.2031C23.0312 29.2031 23.4688 29.0312 23.8125 28.6875ZM22.5 41.25C19.9062 41.25 17.4688 40.7575 15.1875 39.7725C12.9063 38.7887 10.9219 37.4531 9.23438 35.7656C7.54688 34.0781 6.21125 32.0938 5.2275 29.8125C4.2425 27.5312 3.75 25.0938 3.75 22.5C3.75 19.9062 4.2425 17.4688 5.2275 15.1875C6.21125 12.9063 7.54688 10.9219 9.23438 9.23438C10.9219 7.54688 12.9063 6.21062 15.1875 5.22562C17.4688 4.24187 19.9062 3.75 22.5 3.75C25.0938 3.75 27.5312 4.24187 29.8125 5.22562C32.0938 6.21062 34.0781 7.54688 35.7656 9.23438C37.4531 10.9219 38.7887 12.9063 39.7725 15.1875C40.7575 17.4688 41.25 19.9062 41.25 22.5C41.25 25.0938 40.7575 27.5312 39.7725 29.8125C38.7887 32.0938 37.4531 34.0781 35.7656 35.7656C34.0781 37.4531 32.0938 38.7887 29.8125 39.7725C27.5312 40.7575 25.0938 41.25 22.5 41.25ZM22.5 37.5C26.6562 37.5 30.1956 36.0394 33.1181 33.1181C36.0394 30.1956 37.5 26.6562 37.5 22.5C37.5 18.3438 36.0394 14.8044 33.1181 11.8819C30.1956 8.96062 26.6562 7.5 22.5 7.5C18.3438 7.5 14.805 8.96062 11.8837 11.8819C8.96125 14.8044 7.5 18.3438 7.5 22.5C7.5 26.6562 8.96125 30.1956 11.8837 33.1181C14.805 36.0394 18.3438 37.5 22.5 37.5Z" fill="#F8E4BE"/>
                            </svg>
                        </button>
                        <button onClick={next} className='flex items-center justify-center w-11 h-11 relative'>
                            <div className='w-full h-full absolute inset-0 bg-[#8D685E] opacity-0 z-10 rounded-full hover:opacity-30 duration-300'></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                <path d="M23.8125 28.6875L28.6875 23.8125C29.0625 23.4375 29.25 23 29.25 22.5C29.25 22 29.0625 21.5625 28.6875 21.1875L23.7656 16.2656C23.4219 15.9219 22.9925 15.7575 22.4775 15.7725C21.9613 15.7887 21.5312 15.9688 21.1875 16.3125C20.8438 16.6562 20.6719 17.0937 20.6719 17.625C20.6719 18.1562 20.8438 18.5938 21.1875 18.9375L22.875 20.625H16.8281C16.2969 20.625 15.8594 20.8044 15.5156 21.1631C15.1719 21.5231 15 21.9688 15 22.5C15 23.0312 15.18 23.4762 15.54 23.835C15.8988 24.195 16.3438 24.375 16.875 24.375H22.875L21.1406 26.1094C20.7969 26.4531 20.6325 26.8831 20.6475 27.3994C20.6637 27.9144 20.8438 28.3438 21.1875 28.6875C21.5312 29.0312 21.9688 29.2031 22.5 29.2031C23.0312 29.2031 23.4688 29.0312 23.8125 28.6875ZM22.5 41.25C19.9062 41.25 17.4688 40.7575 15.1875 39.7725C12.9063 38.7887 10.9219 37.4531 9.23438 35.7656C7.54688 34.0781 6.21125 32.0938 5.2275 29.8125C4.2425 27.5312 3.75 25.0938 3.75 22.5C3.75 19.9062 4.2425 17.4688 5.2275 15.1875C6.21125 12.9063 7.54688 10.9219 9.23438 9.23438C10.9219 7.54688 12.9063 6.21062 15.1875 5.22562C17.4688 4.24187 19.9062 3.75 22.5 3.75C25.0938 3.75 27.5312 4.24187 29.8125 5.22562C32.0938 6.21062 34.0781 7.54688 35.7656 9.23438C37.4531 10.9219 38.7887 12.9063 39.7725 15.1875C40.7575 17.4688 41.25 19.9062 41.25 22.5C41.25 25.0938 40.7575 27.5312 39.7725 29.8125C38.7887 32.0938 37.4531 34.0781 35.7656 35.7656C34.0781 37.4531 32.0938 38.7887 29.8125 39.7725C27.5312 40.7575 25.0938 41.25 22.5 41.25ZM22.5 37.5C26.6562 37.5 30.1956 36.0394 33.1181 33.1181C36.0394 30.1956 37.5 26.6562 37.5 22.5C37.5 18.3438 36.0394 14.8044 33.1181 11.8819C30.1956 8.96062 26.6562 7.5 22.5 7.5C18.3438 7.5 14.805 8.96062 11.8837 11.8819C8.96125 14.8044 7.5 18.3438 7.5 22.5C7.5 26.6562 8.96125 30.1956 11.8837 33.1181C14.805 36.0394 18.3438 37.5 22.5 37.5Z" fill="#F8E4BE"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RecommendedSection;