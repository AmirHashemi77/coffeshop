import React, { useContext } from 'react';
import { authContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';

const useFetchUser = () => {
    const { user, setUser } = useContext(authContext);

    const { data } = useQuery({
      
      queryKey: ["userData"],
  
      queryFn: async () => {
      
          const res = await fetch(
            `https://coffeshopapi.amirhashemi776.ir/users?email=${user.email}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!res.ok) {
            throw new Error("some thing is wrong");
          }
          const data = await res.json();
          setUser(data[0]);
          return data;
        
      }
    });



    return {data};
};

export default useFetchUser;