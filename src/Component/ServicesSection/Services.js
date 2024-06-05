import React from 'react';
import ServicesItem from './ServicesItem';
import { servicesArr } from '../../utils/servicesArr';




function Services() {
    



    return (
        <div data-aos='fade-up' className='w-full mb-20 relative'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='flex flex-col items-center gap-16'>
                    <h4 className='section-title'>Services</h4>
                    <div className='grid grid-rows-1 grid-cols-1 gap-14 w-full px-7 md2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
                       {
                        servicesArr.map(({title,imgurl,id,route})=>(
                            <ServicesItem key={id} title={title} imgurl={imgurl} id={id} route={route}/>
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