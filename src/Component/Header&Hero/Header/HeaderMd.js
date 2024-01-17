import React, { useRef } from 'react';
import AccountIcon from '../../../icons/AccountIcon';
import CartIcon from '../../../icons/CartIcon';

const HeaderMd = () => {

    const header=useRef();

    document.onwheel=(e)=>{
        if(window.scrollY>0 && e.deltaY>0){
            header.current.classList.add('-translate-y-full')
            header.current.classList.add('active-link-header')
        }
        if(window.scrollY==0){
            header.current.classList.remove('active-link-header')   
        }
        if(e.deltaY<0){
            header.current.classList.remove('-translate-y-full')
            
        }
        
    }
    return (
        <header ref={header} className='hidden lg:flex items-center justify-between h-20 sticky top-0 right-0 z-20 duration-500'>
        <div className='flex items-center justify-between w-1/2 px-5'>
            <img src="/images/logo.png" alt="logo" />
            <div className='flex items-center gap-3'>
                <AccountIcon/>
                <CartIcon/>
            </div>
        </div>
        <ul className='flex items-center justify-between w-1/2 h-full px-3  z-10'>
            <li className='flex items-center justify-center text-base font-leiko text-cream2 capitalize h-full px-1 lg:px-3 xl:px-5 2xl:text-2xl active-link-header '>home</li>
            <li className='flex items-center justify-center text-base font-leiko text-cream2 capitalize h-full px-1 lg:px-3 xl:px-5 2xl:text-2xl'>menu</li>
            <li className='flex items-center justify-center text-base font-leiko text-cream2 capitalize h-full px-1 lg:px-3 xl:px-5 2xl:text-2xl'>services</li>
            <li className='flex items-center justify-center text-base font-leiko text-cream2 capitalize h-full px-1 lg:px-3 xl:px-5 2xl:text-2xl'>product</li>
            <li className='flex items-center justify-center text-base font-leiko text-cream2 capitalize h-full px-1 lg:px-3 xl:px-5 2xl:text-2xl'>blog</li>
            <li className='flex items-center justify-center text-base font-leiko text-cream2 capitalize h-full px-1 lg:px-3 xl:px-5 2xl:text-2xl'>contact</li>
        </ul>

    </header>
    );
};

export default HeaderMd;