import React, { createContext, useState } from 'react';


export const authContext=createContext()



const AuthContextProvider = ({children}) => {
   const [isLogIn,setIsLogIn]=useState(false)
   const [user,setUser]=useState(null)

    return (
        <authContext.Provider value={{
           isLogIn ,
           setIsLogIn ,
           user , 
           setUser
        }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;