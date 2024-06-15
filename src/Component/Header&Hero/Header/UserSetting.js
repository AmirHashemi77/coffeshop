import React, { useContext } from 'react';
import { authContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

const UserSetting = () => {
    const {isLogIn , user , setUser , setIsLogIn} = useContext(authContext)


    const logOutHandler = ()=>{
        alert(`${user.userName} is LogOut .`);
        setUser(null);
        setIsLogIn(false);
    }
    
    return (
                <div className='flex flex-col items-start absolute top-full right-3/4 bg-[#6c493cbe] py-3 px-5 shadow-xl rounded-lg'>

                    {
                        isLogIn ?   <>
                                        <p className='text-lg text-brown1 hover:opacity-75 duration-200 cursor-pointer whitespace-nowrap'>{user?.userName}</p>
                                        <button onClick={logOutHandler} className='text-lg text-brown1 hover:opacity-75 duration-200'>LogOut</button>  
                                    </>

                                    : 

                                    <>
                                        <Link className='text-lg text-brown1 hover:opacity-75 duration-200' to='/signup'>SignUp</Link>
                                        <Link className='text-lg text-brown1 hover:opacity-75 duration-200' to='/login'>LogIn</Link>
                                    </>
                    }
                </div>
    );
};

export default UserSetting;