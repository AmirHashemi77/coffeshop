import React, { useContext } from 'react';
import CartIcon from '../../../icons/CartIcon';
import AccountIcon from '../../../icons/AccountIcon';
import MenuIcon from '../../../icons/MenuIcon';
import { uiContext } from '../../../context/UiContext';
import { Link } from 'react-router-dom';

const HeaderSm = () => {
    
    const {setOpenMenuSm,...uiCtx}=useContext(uiContext)
    
    const openMenuHandler=()=>{
        setOpenMenuSm((prev)=>!prev)
    }

    return (
        <header className='w-full px-5 py-2'>
            <div className='flex justify-between items-center w-full'>
                <Link to='/'>
                    <img src="/images/logo.png" alt="logo" className='w-16 h-16'/>
                </Link> 
                <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-center relative' onMouseEnter={()=>uiCtx?.setOpenRegisterMenu(true)} onMouseLeave={()=>uiCtx.setOpenRegisterMenu(false)}>
                        <span className='cursor-pointer'><AccountIcon/></span>
                    {uiCtx.isopenRegisterMenu && <div className='flex flex-col items-start absolute top-full z-30 right-3/4 bg-[#6c493cf7] py-3 px-5 shadow-xl rounded-lg'>
                            <Link className='text-lg text-brown1 hover:opacity-75 duration-200 ' to='/signup'>SignUp</Link>
                            <Link className='text-lg text-brown1 hover:opacity-75 duration-200 ' to='/login'>LogIn</Link>
                        </div>}
                    </div>
                    <Link to='/cart'>
                        <CartIcon/>
                    </Link>
                    <button onClick={openMenuHandler} >
                        <MenuIcon/>
                    </button>
                </div>
            </div>
            
        </header>
    );
};

export default HeaderSm;