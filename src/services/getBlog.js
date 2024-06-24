export const getBlogs= async ()=>{
    
    const res=await fetch(`https://coffeshopapi.amirhashemi776.ir/cafeBlog`,{
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




export const getBlogDetails = async ({queryKey})=>{
    const res=await fetch(`https://coffeshopapi.amirhashemi776.ir/cafeBlog?id=${queryKey[1]}`,{
        headers: {
            "Content-Type": "application/json",
          }
    })
    if(!res.ok){
        throw new Error('some thing is wrong')
    }
    const  data=await res.json()
  
    if(data.length === 0){
        throw new Error('The desired blog was not found')
    }
    return data;
}