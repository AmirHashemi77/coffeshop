import React, { createContext, useState } from 'react';

const initialState={
    isOpenMunuSm:false,
    isopenRegisterMenu:false
}

export const uiContext=createContext(initialState)



const UiContextProvider = ({children}) => {
    const [openMenuSm,setOpenMenuSm]=useState(false)
    const [openRegisterMenu,setOpenRegisterMenu]=useState(false)

    return (
        <uiContext.Provider value={{
            isOpenMunuSm:openMenuSm,
            setOpenMenuSm:setOpenMenuSm,
            isopenRegisterMenu:openRegisterMenu,
            setOpenRegisterMenu:setOpenRegisterMenu
        }}>
            {children}
        </uiContext.Provider>
    );
};

export default UiContextProvider;