

export const checkUser=async (email)=>{
    const res=await fetch(`http://localhost:8000/users?email=${email}`)
    if(!res.ok){
        throw new Error('some thing is wrong')
    }
    const  data=await res.json()
  
    // if(data.length > 0){
    //     throw new Error('Your email or phone number is already registered on the site .')
    // }

    return data;

}






export const signUpHandler =async (userData)=>{
   
        const postRes=await fetch(`http://localhost:8000/users`,{
            method:'POST',
            body:JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
              },
        })
        if(!postRes.ok){
            throw new Error('some thing is wrong')
        }
    
        const postData=await postRes.json()
    
      
        
        return postData;
    }
