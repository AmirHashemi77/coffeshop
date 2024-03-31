import React, { useRef } from 'react';
import AccountIcon from '../../../icons/AccountIcon';
import CartIcon from '../../../icons/CartIcon';

const HeaderMd = () => {

    const headerEl=useRef();
    

    document.onwheel=(e)=>{
        const headerHeight=headerEl.current.getBoundingClientRect().height;
        
        if(window.scrollY>headerHeight && e.deltaY>0){
          
            headerEl.current.classList.add('-translate-y-full')
            headerEl.current.classList.replace('bg-transparent','bg-header')
        }
        if(window.scrollY===0){
            headerEl.current.classList.replace('bg-header','bg-transparent')  
        }
        if(e.deltaY<0){
            headerEl.current.classList.remove('-translate-y-full')
        }
        
    }
    return (
        <header ref={headerEl} className='hidden lg:flex items-center justify-between h-20 sticky top-0 left-0 z-30 duration-300 bg-transparent 2xl:h-24'>
        <div className='flex items-center justify-between w-1/2 px-5'>
            <img src="./images/logo.png" alt="logo" />
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