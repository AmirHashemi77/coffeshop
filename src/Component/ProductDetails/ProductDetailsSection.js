import React from 'react';
import NumOfProduct from './NumOfProduct';

const ProductDetailsSection = () => {
    return (
        <div className='flex flex-col justify-between items-center w-full max-w-5xl bg-card-slider p-5 md:flex-row-reverse'>
        {/* product image  */}
        <div className='flex items-center justify-center w-full px-5 md:w-5/12'>
            <img src="/images/product/a1e02c7516fafdf48a9f1e33639aea78.png" alt="product" className='w-full h-96 object-contain object-center' />
        </div>

        {/* product details section  */}

        <div className='flex flex-col items-start w-full px-5 flex-1'>
            {/* title section  */}
                <div className='flex flex-col w-full items-start gap-3 pb-6  border-b border-white border-opacity-50 px-3'>
                    {/* title  */}
                    <h1 className='text-white text-3xl font-leiko leading-8 text-left md:text-4xl lg:text-5xl capitalize opacity-80'>Arabica</h1>
                    {/* subtitle  */}
                    <h3 className='text-white text-lg font-leiko leading-8 text-left capitalize opacity-40 '>Light roast, medium bitterness, lots of aroma, too much</h3>

                </div>

            {/* price section */}
                <div className='flex flex-col items-center gap-4 justify-between w-full px-3 py-6 border-b border-white border-opacity-50 md:flex-row'>
                    <div className='flex flex-row items-center gap-3'>
                        <h2 className='text-white text-2xl font-leiko leading-8 text-center lg:text-3xl capitalize opacity-40'>
                            Price: 
                        </h2>
                        <span className='text-white text-2xl font-leiko leading-8 text-center lg:text-3xl capitalize opacity-40'>5$</span>
                    </div>
                   <NumOfProduct/>
                </div>


                <button className='flex items-center justify-center rounded-lg bg-[#22151884] w-full my-6 p-4 text-brown1 hover:bg-[#221518c0] duration-300'>Add to cart</button>
        </div>
    </div>
    );
};

export default ProductDetailsSection;