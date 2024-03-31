import React, { useRef } from 'react';
import CartIcon from '../../../icons/CartIcon';
import AccountIcon from '../../../icons/AccountIcon';
import MenuIcon from '../../../icons/MenuIcon';

const HeaderSm = () => {
    const menuBtn=useRef();
    


    return (
        <header className='w-full px-5 py-2'>
            <div className='flex justify-between items-center w-full'>
                <img src="./images/logo.png" alt="logo" className='w-16 h-16'/>
                <div className='flex items-center gap-2'>
                    <AccountIcon/>
                    <CartIcon/>
                    <div ref={menuBtn}>
                        <MenuIcon/>
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default HeaderSm;