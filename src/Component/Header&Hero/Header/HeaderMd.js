import React, { useContext, useRef } from 'react';
import AccountIcon from '../../../icons/AccountIcon';
import CartIcon from '../../../icons/CartIcon';
import { Link, NavLink } from 'react-router-dom';
import { uiContext } from '../../../context/UiContext';

const HeaderMd = () => {

    const headerEl=useRef();
    const uiCtx=useContext(uiContext)
    

    document.onwheel=(e)=>{
        const headerHeight=headerEl?.current?.getBoundingClientRect()?.height;
        
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
        <header ref={headerEl} className='hidden lg:flex items-center justify-between h-20 fixed w-full top-0 left-0 z-30 duration-300 bg-transparent 2xl:h-24'>
        <div className='flex items-center justify-between w-1/2 px-5'>
            <Link to='/'>
                <img src="/images/logo.png" alt="logo" />
            </Link>
            <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center relative' onMouseEnter={()=>uiCtx?.setOpenRegisterMenu(true)} onMouseLeave={()=>uiCtx.setOpenRegisterMenu(false)}>
                    <span className='cursor-pointer'><AccountIcon/></span>
                   {uiCtx.isopenRegisterMenu && <div className='flex flex-col items-start absolute top-full right-3/4 bg-[#6c493cbe] py-3 px-5 shadow-xl rounded-lg'>
                        <Link className='text-lg text-brown1 hover:opacity-75 duration-200 ' to='/signup'>SignUp</Link>
                        <Link className='text-lg text-brown1 hover:opacity-75 duration-200 ' to='/login'>LogIn</Link>
                    </div>}
                </div>
                <Link to='/cart'><CartIcon/></Link>
            </div>
        </div>
        <ul className='flex items-center justify-between w-1/2 h-full px-3  z-10'>
            <li className='h-full'><NavLink className={ ({isActive})=>isActive ? 'link-header active-link-header' : 'link-header'} to='/'>home</NavLink></li>
            <li className='h-full'><NavLink className={ ({isActive})=>isActive ? 'link-header active-link-header' : 'link-header'} to='/menu'>menu</NavLink></li>
            <li className='h-full'><NavLink className={ ({isActive})=>isActive ? 'link-header active-link-header' : 'link-header'} to='/services'>services</NavLink></li>
            <li className='h-full'><NavLink className={ ({isActive})=>isActive ? 'link-header active-link-header' : 'link-header'} to='/products'>product</NavLink></li>
            <li className='h-full'><NavLink className={ ({isActive})=>isActive ? 'link-header active-link-header' : 'link-header'} to='/blogs'>blog</NavLink></li>
            <li className='h-full'><NavLink className={ ({isActive})=>isActive ? 'link-header active-link-header' : 'link-header'} to='/aboutus'>contact</NavLink></li>
        </ul>

        </header>
    );
};

export default HeaderMd;