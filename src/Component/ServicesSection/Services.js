import React from 'react';
import ServicesItem from './ServicesItem';

const servicesArr=[
    {
        title:'equipment',
        imgurl:"/images/icon/icon 1.svg"
    },
    {
        title:'type of coffee',
        imgurl:"/images/icon/frame.svg"
    },
    {
        title:'take a way ',
        imgurl:"/images/icon/icon 3.svg"
    },
    {
        title:'beans variant',
        imgurl:"/images/icon/frame (1).svg"
    },
    {
        title:'pastry',
        imgurl:"/images/icon/icon 4.svg"
    }
]


function Services() {
    



    return (
        <div className='w-full mb-20'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='flex flex-col items-center gap-16'>
                    <h4 className='section-title'>Services</h4>
                    <div className='grid grid-rows-1 grid-cols-1 gap-14 w-full px-7 md2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
                       {
                        servicesArr.map(({title,imgurl})=>(
                            <ServicesItem  title={title} imgurl={imgurl}/>
                        ))
                       }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;