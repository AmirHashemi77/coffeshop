import React from 'react';

const List = ({children,type}) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2  w-full px-3 gap-4 ${type==='products' ? 'lg:grid-cols-3 md:w-2/3 lg:w-3/4 ' : 'md:w-3/4' }`}>
            {children}
        </div>
    );
};

export default List;