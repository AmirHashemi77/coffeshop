import React, { useContext } from 'react';
import { uiContext } from '../../../context/UiContext';
import { NavLink } from 'react-router-dom';

const MenuSm = () => {
    const {isOpenMunuSm}=useContext(uiContext)


    return (
        <div className={`absolute top-0 left-0 w-1/2 lg:hidden h-full bg-[#231619]  duration-500 py-10 pr-5 z-40 ${isOpenMunuSm ? 'translate-x-0' : '-translate-x-full'}`}>
            <ul className='flex flex-col w-full items-start'>
                <li className='w-full py-5'><NavLink to='/' className={({isActive})=>isActive ? 'link-header-sm active-link-header-sm' : 'link-header-sm'}>Home</NavLink></li>
                <li className='w-full py-5'><NavLink to='/menu' className={({isActive})=>isActive ? 'link-header-sm active-link-header-sm' : 'link-header-sm'}>Menu</NavLink></li>
                <li className='w-full py-5'><NavLink to='/services' className={({isActive})=>isActive ? 'link-header-sm active-link-header-sm' : 'link-header-sm'}>Services</NavLink></li>
                <li className='w-full py-5'><NavLink to='/products' className={({isActive})=>isActive ? 'link-header-sm active-link-header-sm' : 'link-header-sm'}>Product</NavLink></li>
                <li className='w-full py-5'><NavLink to='/blogs' className={({isActive})=>isActive ? 'link-header-sm active-link-header-sm' : 'link-header-sm'}>Blogs</NavLink></li>
                <li className='w-full py-5'><NavLink to='/aboutus' className={({isActive})=>isActive ? 'link-header-sm active-link-header-sm' : 'link-header-sm'}>Contact</NavLink></li>

            </ul>
        </div>
    );
};

export default MenuSm;