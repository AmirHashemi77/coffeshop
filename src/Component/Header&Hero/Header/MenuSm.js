import React from 'react';

const MenuSm = () => {
    return (
        <div className='absolute top-0 left-0 w-1/2 lg:hidden h-full bg-[#231619]  duration-500 py-10 pr-5'>
            <ul className='flex flex-col w-full items-start'>
                <li className='w-full text-xl capitalize font-leiko font-semibold text-cream3 py-5 px-4 active-link-header-sm'>Home</li>
                <li className='w-full text-xl capitalize font-leiko font-semibold text-cream3 py-5 px-4'>Menu</li>
                <li className='w-full text-xl capitalize font-leiko font-semibold text-cream3 py-5 px-4'>Services</li>
                <li className='w-full text-xl capitalize font-leiko font-semibold text-cream3 py-5 px-4'>Product</li>
                <li className='w-full text-xl capitalize font-leiko font-semibold text-cream3 py-5 px-4'>Blog</li>
                <li className='w-full text-xl capitalize font-leiko font-semibold text-cream3 py-5 px-4'>Contact</li>

            </ul>
        </div>
    );
};

export default MenuSm;