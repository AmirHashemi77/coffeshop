import React from 'react';
import { Link } from 'react-router-dom';
const ServicesItem = ({imgurl,title,id,route}) => {
    let animationOption=null;
    
    if(id===1 || id===2){
        animationOption='fade-left'
    }else if(id===3){
        animationOption=''
    }else{
        animationOption='fade-right'
    }


    return (
        <Link to={`/products/${route}`} data-aos={animationOption}  className='flex flex-col items-center gap-5 p-10 bg-[#54372B] rounded-[35px]'>
            <img src={imgurl} alt="" />
            <p className='text-sm text-brown1 capitalize text-center'>{title}</p>
        </Link>
    );
};

export default ServicesItem;