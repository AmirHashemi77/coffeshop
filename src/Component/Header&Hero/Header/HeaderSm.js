import React, { useContext } from 'react';
import CartIcon from '../../../icons/CartIcon';
import AccountIcon from '../../../icons/AccountIcon';
import MenuIcon from '../../../icons/MenuIcon';
import { uiContext } from '../../../context/UiContext';
import { Link } from 'react-router-dom';

const HeaderSm = () => {
    
    const {setOpenMenuSm}=useContext(uiContext)
    
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
                    <AccountIcon/>
                    <CartIcon/>
                    <button onClick={openMenuHandler} >
                        <MenuIcon/>
                    </button>
                </div>
            </div>
            
        </header>
    );
};

export default HeaderSm;