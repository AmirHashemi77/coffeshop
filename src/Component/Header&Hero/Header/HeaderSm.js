import React, { useContext } from 'react';
import CartIcon from '../../../icons/CartIcon';
import AccountIcon from '../../../icons/AccountIcon';
import MenuIcon from '../../../icons/MenuIcon';
import { uiContext } from '../../../context/UiContext';
import { Link } from 'react-router-dom';
import UserSetting from './UserSetting';

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
                    {uiCtx.isopenRegisterMenu && <UserSetting/>}
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