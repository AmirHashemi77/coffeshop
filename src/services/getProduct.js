
export const getProducts= async ({queryKey})=>{
    
        const res=await fetch(`https://coffeshopapi.amirhashemi776.ir/services?type=${queryKey[1]}`,{
            headers: {
                "Content-Type": "application/json",
              }
        })
        if(!res.ok){
            throw new Error('some thing is wrong')
        }
        const  data=await res.json()
      
        if(data.length === 0){
            throw new Error('No Item Found.')
        }
        return data;

    
}


export const getSliderProducts= async ({queryKey})=>{
    
        const res=await fetch(`https://coffeshopapi.amirhashemi776.ir/services?sliderType=${queryKey[1]}`,{
            headers: {
                "Content-Type": "application/json",
              }
        })
        if(!res.ok){
            throw new Error('some thing is wrong')
        }
        const  data=await res.json()
      
        if(data.length === 0){
            throw new Error('No Item Found.')
        }
        return data;

    
}





export const getProductDetails = async ({queryKey})=>{
    const res=await fetch(`https://coffeshopapi.amirhashemi776.ir/services?id=${queryKey[1]}`,{
        headers: {
            "Content-Type": "application/json",
          }
    })
    if(!res.ok){
        throw new Error('some thing is wrong')
    }
    const  data=await res.json()
  
    if(data.length === 0){
        throw new Error('The desired product was not found')
    }
    return data;
}


export const postComment = async ({productId,newComments})=>{

    const postRes=await fetch(`https://coffeshopapi.amirhashemi776.ir/services/${productId}`,{
        method:'PATCH',
        body:JSON.stringify(newComments),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    if(!postRes.ok){
        throw new Error('some thing is wrong')
    }

    const postData=await postRes.json()

  
    
    return postData;
}















// {
//     "id": "coffee-grinder",
//     "productName": "Coffee Grinder",
//     "type": "equipment",
//     "description": "A precision coffee grinder for freshly ground coffee beans.",
//     "photo": "/images/product/equipmentIMG/coffee-grinder.png",
//     "price": 200.00,
//     "comments": [
//       {
//         "name": "Sophia Williams",
//         "commentContent": "Grinds the beans perfectly. A great addition to our cafe.",
//         "date": "2024-04-18"
//       },
//       {
//         "name": "James Brown",
//         "commentContent": "Compact and efficient. Highly recommend.",
//         "date": "2024-04-22"
//       }
//     ]
//   }