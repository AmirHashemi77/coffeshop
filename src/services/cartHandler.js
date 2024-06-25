



export const editCartHandler = async ({newCartData , userId})=>{

    const res=await fetch(`https://coffeshopapi.amirhashemi776.ir/users/${userId}`,{
        method:'PATCH',
        body:JSON.stringify({cart:newCartData}),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    if(!res.ok){
        throw new Error('some thing is wrong')
    }

}




export const fetchCartHandler = async ({queryKey})=>{

    const res=await fetch(`https://coffeshopapi.amirhashemi776.ir/users/${queryKey[1]}`,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
          }
    })
    if(!res.ok){
        throw new Error('some thing is wrong')
    }

    const data=await res.json()


    return data.cart;

}
