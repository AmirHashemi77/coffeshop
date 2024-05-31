import React from 'react';

const ProductList = ({children}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-3 gap-4 col-start-2 col-end-5'>
            {children}
        </div>
    );
};

export default ProductList;