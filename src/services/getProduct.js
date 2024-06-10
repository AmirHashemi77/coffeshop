
export const getProducts= async (type)=>{
    
        const res=await fetch(`http://localhost:8000/services?type=${type}`)
        if(!res.ok){
            throw new Error('some thing is wrong')
        }
        const  data=await res.json()
      
        if(data.length === 0){
            throw new Error('No Item Found.')
        }
        return data;

    
}





export const getProductDetails = async (productId)=>{
    const res=await fetch(`http://localhost:8000/services?id=${productId}`)
    if(!res.ok){
        throw new Error('some thing is wrong')
    }
    const  data=await res.json()
  
    if(data.length === 0){
        throw new Error('The desired product was not found')
    }
    return data;
}


export const postComment = async (productId,comment)=>{
    const res=await fetch(`http://localhost:8000/services/${productId}`)
    if(!res.ok){
        throw new Error('some thing is wrong')
    }
    const  data=await res.json()
    if(data.length === 0){
        throw new Error('The desired product was not found')
    }

    data.push(comment)

    const postRes=await fetch(`http://localhost:8000/services/${productId}`,{
        method:'PUT',
        body:JSON.stringify(data),
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