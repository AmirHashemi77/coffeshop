import React from 'react';
import ServicesItem from './ServicesItem';

const servicesArr=[
    {
        id:1,
        title:'equipment',
        imgurl:"/images/icon/icon 1.svg"
    },
    {
        id:2,
        title:'type of coffee',
        imgurl:"/images/icon/frame.svg"
    },
    {
        id:3,
        title:'take a way ',
        imgurl:"/images/icon/icon 3.svg"
    },
    {
        id:4,
        title:'beans variant',
        imgurl:"/images/icon/frame (1).svg"
    },
    {
        id:5,
        title:'pastry',
        imgurl:"/images/icon/icon 4.svg"
    }
]


function Services() {
    



    return (
        <div data-aos='fade-up' className='w-full mb-20 relative'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='flex flex-col items-center gap-16'>
                    <h4 className='section-title'>Services</h4>
                    <div className='grid grid-rows-1 grid-cols-1 gap-14 w-full px-7 md2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
                       {
                        servicesArr.map(({title,imgurl,id})=>(
                            <ServicesItem key={id} title={title} imgurl={imgurl} id={id}/>
                        ))
                       }
                    </div>
                </div>

            </div>
            <div className='hidden absolute -bottom-24 right-0 rotate-180 md:block'>
                <img src="/images/icon/bg-cofe.svg" alt="" />
            </div>
        </div>
    );
}

export default Services;