import React, { createContext, useState } from 'react';

const initialState={
    isOpenMunuSm:false
}

export const uiContext=createContext(initialState)



const UiContextProvider = ({children}) => {
    const [openMenuSm,setOpenMenuSm]=useState(false)

    return (
        <uiContext.Provider value={{
            isOpenMunuSm:openMenuSm,
            setOpenMenuSm:setOpenMenuSm
        }}>
            {children}
        </uiContext.Provider>
    );
};

export default UiContextProvider;